document.addEventListener('DOMContentLoaded', function() {
  const apiKeyInput = document.getElementById('api-key');
  const saveBtn = document.getElementById('save-btn');
  const testBtn = document.getElementById('test-btn');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  // Load existing API key
  chrome.storage.sync.get(['geminiApiKey'], (result) => {
    if (result.geminiApiKey) {
      apiKeyInput.value = result.geminiApiKey;
    }
  });

  // Save API key
  saveBtn.addEventListener('click', () => {
    const apiKey = apiKeyInput.value.trim();
    
    if (!apiKey) {
      showError('Please enter an API key.');
      return;
    }

    if (!apiKey.startsWith('AIza')) {
      showError('API key should start with "AIza". Please check your key.');
      return;
    }

    saveBtn.disabled = true;
    saveBtn.textContent = 'Saving...';

    chrome.storage.sync.set({ geminiApiKey: apiKey }, () => {
      showSuccess();
      saveBtn.disabled = false;
      saveBtn.textContent = 'Save Settings';
      
      // Auto-close after showing success
      setTimeout(() => {
        window.close();
      }, 1500);
    });
  });

  // Test API key
  testBtn.addEventListener('click', async () => {
    const apiKey = apiKeyInput.value.trim();
    
    if (!apiKey) {
      showError('Please enter an API key first.');
      return;
    }

    testBtn.disabled = true;
    testBtn.textContent = 'Testing...';

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: 'Hello, this is a test. Please respond with "API key is working!"' }]
            }]
          })
        }
      );

      if (response.ok) {
        showSuccess('✅ API key is working correctly!');
      } else {
        const error = await response.json();
        showError(`API key test failed: ${error.error?.message || 'Invalid key'}`);
      }
    } catch (error) {
      showError(`Test failed: ${error.message}`);
    } finally {
      testBtn.disabled = false;
      testBtn.textContent = 'Test API Key';
    }
  });

  function showSuccess(message = '✅ Settings saved successfully!') {
    successMessage.textContent = message;
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  }

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 5000);
  }
});
