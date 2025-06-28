chrome.runtime.onInstalled.addListener(() => {
  // This will prompt the user to enter their API key on first install
  chrome.storage.sync.get(["geminiApiKey"], (result) => {
    if (!result.geminiApiKey) {
      chrome.tabs.create({
        url: "options.html",
      });
    }
  });
});

// Handle errors and keep service worker alive
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Keep service worker alive
  return true;
});
