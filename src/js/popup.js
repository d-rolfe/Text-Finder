function findText() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var request = {action: "findText"};
    request.textToFind = document.getElementById("textToFind1").value;
    request.acrossElements = document.getElementById("acrossElements").checked;
    request.caseSensitive = document.getElementById("caseSensitive").checked;
    request.separateWordSearch = document.getElementById("separateWordSearch").checked;
    request.accuracy = document.getElementById("accuracy").value;
    chrome.tabs.sendMessage(tabs[0].id, request, function(response) {
      console.log("got response from content script");
      console.log(response);
    });
  });
}
document.addEventListener('DOMContentLoaded', () => {
  
  document.getElementById("findBtn").addEventListener("click", function() {
    console.log("Find Button Clicked!");
    findText();
  });

});

//setup before functions
  /*var typingTimer;                //timer identifier
  var doneTypingInterval = 5000;  //time in ms, 5 second for example
  var $input = $('#textToFind1');

  //on keyup, start the countdown
  $input.on('keyup', function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  });

  //on keydown, clear the countdown 
  $input.on('keydown', function () {
    clearTimeout(typingTimer);
  });

  //user is "finished typing," do something
  function doneTyping () {
    console.log("firing!");
  }*/