chrome.action.onClicked.addListener((tab) => {
    let msg = "clicked"
    chrome.tabs.sendMessage(tab.id, msg);
  });
  