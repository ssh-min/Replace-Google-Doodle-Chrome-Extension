var custom_icon = document.createElement("img");
var target = $("#hplogo");
target.empty();
custom_icon.setAttribute("id", "myimage");
custom_icon.setAttribute("style", "display:inline-block;position:relative;max-height:230px;max-width:488px;");
custom_icon.src = chrome.extension.getURL("tree.png");
target.append(custom_icon);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });
