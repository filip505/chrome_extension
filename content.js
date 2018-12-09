chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.greeting == "hello") {
        const videos = document.getElementsByTagName('video')
        const list = []
        console.log('gl', typeof videos)
        for (let i = 0; i < Object.keys(videos).length; i++) {
            console.log('link', videos[i].src)
            list.push(videos[i].src)
        }
        console.log('sending from ' + request.id, list)
        if (list.length > 0)
            sendResponse(list);
    }
});

// const nodeInsertedCallback = (event) => {
//     //console.log('value', Object.values(event.path))
//     //const t = Object.assign({}, event.path)
//     const size = Object.keys(event.path).length
//     for (let i = 0; i < size; i++) {
//         if (event.path[i] instanceof Document) {
//             //console.log(event.path[i].document)

//             const iframes = event.path[i].getElementsByTagName('iframe')
//             const size2 = Object.keys(iframes).length
//             for (let j = 0; j < size2; j++) {
//                 //console.log(iframes[j].src)
//                 console.log('da', iframes[j].contentWindow.document.getElementsByTagName('video'))
//             }


//         }
//     }

//  /usr/local/bin/node};

//document.addEventListener('DOMNodeInserted', nodeInsertedCallback);
