function init() {
    
            chrome.tabs.getSelected(null, (tab)=> {

                chrome.tabs.sendRequest(tab.id, { greeting: "hello", id: tab.id }, function (response) {
                    console.log('response from ' + tab.id, response)
                    var node = document.createElement("div");
    
                    if (response instanceof Array) {
                        response.forEach(element => {
                            var textnode = document.createElement("div");
                            //textnode.addEventListener("click", () => chrome.tabs.create({ active: true, url: element }))
                            textnode.innerHTML = `<a href='${element}' download>${element}</a>`;
                            console.log('log', textnode)
                            node.appendChild(textnode);
    
                        });
                        document.getElementById('container').appendChild(node)
                    }
    
                });

            })
            
            
            
}

window.onload = function () {
    init();
}