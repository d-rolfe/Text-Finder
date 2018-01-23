var markInstance = new Mark(document.querySelector("body"));
var options = {
	separateWordSearch: false,
	accuracy: "partially",
	acrossElements: true
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(sender.tab ?
			"in content script, heard msg from a content script:" + sender.tab.url :
			"in content script, heard msg from the extension");
		console.log(request);
		if (request.action == "findText") {
			var text = request.textToFind;
			options.acrossElements = request.acrossElements;
			options.caseSensitive = request.caseSensitive;
			options.separateWordSearch = request.separateWordSearch;
			options.accuracy = request.accuracy;
			markInstance.unmark({
				done: function() {
					markInstance.mark(text, options);
				}
			});
            sendResponse({answer: "searched for text"});
		}
	});

console.log("content script loaded.");