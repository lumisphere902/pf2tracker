$(document).ready(() => $('#parse-cta').click(() => {
    chrome.tabs.query({
        active: true,
        currentWindow: true,
    }, tabs => chrome.tabs.sendMessage(tabs[0].id, { type: 'parse', format: $('#format').val() }));
}));
