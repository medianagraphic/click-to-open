function setIcon(status, tabId){
   chrome.browserAction.setIcon({
      path: "48-"+status+".png",
      tabId: tabId
   })
}

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
   if (request.action === 'status') {
      sendResponse({status: localStorage.status})
      setIcon(localStorage.status, sender.tab.id)
   }
})

if(!localStorage.hasOwnProperty('status')) {
   localStorage.status = "on"
}

chrome.browserAction.onClicked.addListener(function(tab) {
   localStorage.status = (localStorage.status==="on") ? "off" : "on"
   setIcon(localStorage.status, tab.id)
});
