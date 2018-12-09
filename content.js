chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.greeting == "scan") {
        const videos = document.getElementsByTagName('video')
        const sources = document.getElementsByTagName('source')
        //console.log('sources', sources)
        //console.log('videos', videos)
        const list = []

        for (let i = 0; i < Object.keys(videos).length; i++) {
            list.push(videos[i].src.replace('mime=true', ''))
        }
        for (let i = 0; i < Object.keys(sources).length; i++) {
            list.push(sources[i].src.replace('mime=true', ''))
        }
        if (list.length > 0)
            sendResponse(list);
    }
});