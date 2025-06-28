document.addEventListener('DOMContentLoaded', function() {
  const summarizeBtn = document.getElementById('summarize');
  const copyBtn = document.getElementById('copy-btn');
  const settingsBtn = document.getElementById('settings-btn');
  const resultDiv = document.getElementById('result');
  const summaryTypeSelect = document.getElementById('summary-type');
  const copySuccess = document.getElementById('copy-success');

  // Open settings page
  settingsBtn.addEventListener('click', () => {
    chrome.runtime.openOptionsPage();
  });

  // Summarize button click
  summarizeBtn.addEventListener('click', async () => {
    await generateSummary();
  });

  // Copy button click
  copyBtn.addEventListener('click', () => {
    const summaryText = resultDiv.innerText;
    if (summaryText && summaryText.trim() !== '' && !summaryText.includes('Select a summary type')) {
      navigator.clipboard.writeText(summaryText).then(() => {
        copySuccess.style.display = 'block';
        setTimeout(() => {
          copySuccess.style.display = 'none';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text:', err);
      });
    }
  });

  async function generateSummary() {
    const summaryType = summaryTypeSelect.value;
    
    // Show loading state
    summarizeBtn.disabled = true;
    summarizeBtn.textContent = 'Loading...';
    resultDiv.innerHTML = `
      <div class="loading">
        <div class="spinner"></div>
        <div>Generating summary...</div>
      </div>
    `;

    try {
      // Get API key
      const storage = await chrome.storage.sync.get(['geminiApiKey']);
      if (!storage.geminiApiKey) {
        throw new Error('API key not found. Please configure your Gemini API key in settings.');
      }

      // Get current tab
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab) {
        throw new Error('No active tab found.');
      }

      // Get article text from content script
      const response = await chrome.tabs.sendMessage(tab.id, { type: 'GET_ARTICLE_TEXT' });
      
      if (!response || !response.success || !response.text) {
        throw new Error('Could not extract readable content from this page. Try a different page with article content.');
      }

      // Generate summary
      const summary = await callGeminiAPI(response.text, summaryType, storage.geminiApiKey);
      resultDiv.textContent = summary;

    } catch (error) {
      console.error('Error generating summary:', error);
      resultDiv.innerHTML = `<div class="error">${error.message}</div>`;
    } finally {
      summarizeBtn.disabled = false;
      summarizeBtn.textContent = 'Summarize';
    }
  }

  async function callGeminiAPI(text, summaryType, apiKey) {
    // Truncate text to avoid API limits
    const maxLength = 15000;
    const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

    // Create prompt based on summary type
    let prompt;
    switch (summaryType) {
      case 'brief':
        prompt = `Please provide a brief, concise summary of this article in 2-3 sentences. Focus on the main point and key takeaway:\n\n${truncatedText}`;
        break;
      case 'detailed':
        prompt = `Please provide a comprehensive summary of this article, covering all main points, key details, and important context. Organize the information clearly:\n\n${truncatedText}`;
        break;
      case 'bullets':
        prompt = `Please summarize this article as 5-7 key bullet points. Start each point with "• " and keep each point concise but informative:\n\n${truncatedText}`;
        break;
      default:
        prompt = `Please summarize this article:\n\n${truncatedText}`;
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 1000,
          }
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `API error: ${response.status}`);
    }

    const data = await response.json();
    const summary = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!summary) {
      throw new Error('No summary generated. Please try again.');
    }

    return summary.trim();
  }
});
