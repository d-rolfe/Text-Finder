console.log("content script loaded.");
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(sender.tab ?
			"in content script, heard msg from a content script:" + sender.tab.url :
			"in content script, heard msg from the extension");
		console.log(request);
		if (request.action == "findText") {
			var text = request.textToFind;
			console.log('searching for: ' + text);

			var instance = new Mark(document.querySelector("body"));
			instance.mark(text, {separateWordSearch: false, accuracy: "exactly", acrossElements: true});
			/*var innerHTML = document.body.innerHTML;
			var index = innerHTML.indexOf(text);
			console.log(index);
			if (index >= 0) {
				innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
				document.body.innerHTML = innerHTML;
				console.log('highlighted text!');
			}*/
            sendResponse({answer: "searched for text"});
		}
	});