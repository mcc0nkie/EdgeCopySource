function copyWithSource() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "copy_with_source" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      }
    });
  });
}

// Create the context menu entry
chrome.contextMenus.create({
  id: "sourceCopy",
  title: "Source Copy",
  contexts: ["selection"],
});

// Listen for the context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "sourceCopy") {
    copyWithSource();
  }
});

// Listen for the keyboard shortcut
chrome.commands.onCommand.addListener((command) => {
  if (command === "copy_with_source") {
    copyWithSource();
  }
});

