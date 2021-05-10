chrome.browserAction.onClicked.addListener(function(tab) {
	var currentURL;
	
	function getCurrentURL(tab){
		currentURL = tab;
	}

	chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, 
	function(tabs){
		currentURL = tabs[0].url;
		var num = currentURL.search("\/\/*(.*?)\s*\/");
		var newURL = currentURL.match("\/\/*(.*?)\s*\/")[1];
		newURL = newURL.toString().replaceAll(".","-");
		var head = currentURL.substring(0,num+2);
		var end = currentURL.substring(num+2+newURL.length);
		newURL = newURL.concat(".ezaccess.libraries.psu.edu")
		finalURL = head.concat(newURL,end);
		chrome.tabs.update(null, {url:finalURL})
	});

});
