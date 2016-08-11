var test = function() {
	//alert("hello");
    custom_icon = document.createElement("img");
    target = $("#hplogo");
    target.empty();
    custom_icon.setAttribute("id", "myimage");
    custom_icon.setAttribute("style", "display:inline-block;position:relative;max-height:230px;max-width:488px;");
    custom_icon.src = chrome.extension.getURL("tree.png");
    target.append(custom_icon);
};
test();
