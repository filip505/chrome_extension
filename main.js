chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ color: '#3aa757' }, function () {
        console.log("The color is green.");
    });

    var bkg = chrome.extension.getBackgroundPage();
    console.log(bkg.document)
    bkg.console.log('foo');
    var Links = bkg.document.getElementsByTagName('video') 
    console.log(Links)
});

