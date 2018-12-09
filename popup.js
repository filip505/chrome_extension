function init() {
    chrome.tabs.getSelected(null, (tab) => {
        chrome.tabs.sendRequest(tab.id, { greeting: "scan", id: tab.id }, function (response) {
            var node = document.createElement("div");

            if (response instanceof Array) {
                response.forEach(element => {
                    var div = document.createElement("div");
                    div.innerHTML = `<a href='${element}' download="video">${element}</a>`;
                    node.appendChild(div);
                });
                document.getElementById('container').appendChild(node)
            }
        });
    })
}

window.onload = function () {
    init();
}