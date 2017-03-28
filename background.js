browser.browserAction.onClicked.addListener(function (tab) {

    //get current url
    var tabUrl = tab.url;

    //get the proxy link stored
    browser.storage.local.get({
      link: '',
    }, function(items) {

      //verify if the proxy link is set
      if(items.link != ""){
        //create a new url
        var myNewUrl = items.link + tabUrl;

        //Update the current url to the proxyed url
        browser.tabs.update(tab.id, {url: myNewUrl});
      }else{
        //if not set, take the user to the error page
        browser.tabs.create({
          url : "errorPage.html",
          active : true
        });
      }

    });

});

openWithProxy = function(word){
  var query = word.linkUrl;
  //get the proxy link stored

  browser.storage.local.get({
    link: '',
  }, function(items) {

    //verify if the proxy link is set
    if(items.link != ""){
      //create a new url
      var myNewUrl = items.link + query;

      //create a new tab with the proxyed url
      browser.tabs.create({url: myNewUrl});
    }else{
      //if not set, take the user to the error page
      browser.tabs.create({
        url : "errorPage.html",
        active : true
      });
    }

  });

};

browser.contextMenus.create({
  title: "Proxy it for me!",
  contexts:["link"],  // ContextType
  onclick: openWithProxy // A callback function
});