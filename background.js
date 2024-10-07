chrome.commands.onCommand.addListener(async (command) => {
    if (command === "switch-user") {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (tab && tab.url.startsWith('https://mail.google.com/mail/u/0/')) {
            await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                    window.location.href = 'https://mail.google.com/mail/u/1/';
                }
            });
        } else if (tab && tab.url.startsWith('https://mail.google.com/mail/u/1/')) {
            await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                    window.location.href = 'https://mail.google.com/mail/u/0/';
                }
            });
        } else if (!tab.url.startsWith('chrome://')) {
            await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                    window.open(
                        "https://www.gmail.com", "_blank");
                }
            });
        }
    }
});
