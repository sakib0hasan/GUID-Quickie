'use strict';

// Source: https://stackoverflow.com/questions/3436102/copy-to-clipboard-in-chrome-extension
function copy(str, mimetype) {
    document.oncopy = function(event) {
        event.clipboardData.setData(mimetype, str);
        event.preventDefault();
    };
    document.execCommand("Copy", false, null);
}

// Source: https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16).toUpperCase();
    });
}

chrome.commands.onCommand.addListener(function (command) {
    let guid = uuidv4();
    copy(guid, "text/plain");
});