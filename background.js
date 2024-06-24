chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url.includes('x.com')) {
    chrome.tabs.executeScript(tabId, {
      code: 'console.log("we here yuh");'
    });
  }
});
