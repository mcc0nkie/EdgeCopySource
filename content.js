function createFragmentID(text) {
  return text.replace(/[^a-zA-Z0-9]/g, "").slice(0, 64);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "copy_with_source") {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      const sourceURL = document.location.href;
      const encodedText = encodeURIComponent(selectedText);
      const copiedText = `${selectedText}\n\n[Source](${sourceURL}#:~:text=${encodedText})`;
      navigator.clipboard.writeText(copiedText).then(() => {
        sendResponse({ success: true });
      });
    } else {
      sendResponse({ success: false });
    }
  }
  return true;
});
