function getArticleText() {
  // Try multiple selectors to find article content
  const selectors = [
    'article',
    '[role="main"]',
    '.post-content',
    '.entry-content',
    '.article-content',
    '.content',
    'main'
  ];
  
  for (const selector of selectors) {
    const element = document.querySelector(selector);
    if (element && element.innerText.trim().length > 100) {
      return element.innerText.trim();
    }
  }
  
  // Fallback: get all paragraphs
  const paragraphs = Array.from(document.querySelectorAll('p'));
  const text = paragraphs
    .map(p => p.innerText.trim())
    .filter(text => text.length > 20)
    .join('\n\n');
  
  return text || 'No readable content found on this page.';
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "GET_ARTICLE_TEXT") {
    try {
      const text = getArticleText();
      sendResponse({ text: text, success: true });
    } catch (error) {
      sendResponse({ text: null, success: false, error: error.message });
    }
  }
  return true; // Keep message channel open
});
