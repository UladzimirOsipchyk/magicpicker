console.log("background script injected")
chrome.commands.onCommand.addListener((command,tab) => {
  //do stuff here
  console.log("COmmand Executed !!!!!!!!!")
  console.log("Command: ", command)
  console.log("Tab: ", tab)
});

chrome.commands.onCommand.addListener(function (command) {
  console.log("COmmand Executed !!!!!!!!!")
  console.log("Command: ", command)
});


chrome.extension.onMessage.addListener(function (request, sender) {
  chrome.tabs.update(sender.tab.id, { url: request.redirect });
});

chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
  console.log(message)
  console.log(sender)
  sendResponse("Received message in background!!")
})