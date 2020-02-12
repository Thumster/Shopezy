  
document.addEventListener('DOMContentLoaded', function () {
  

  chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
    function(tabs){

      var currUrl = tabs[0].url;

      if(currUrl == "https://shopee.sg/") {
        document.body.style.backgroundColor = "orange";

          // chrome.browserAction.setPopup({
          //    popup:"shopee.html"
          // });
      
          document.getElementById("lazada").setAttribute("hidden","");
          document.getElementById("shopee").removeAttribute("hidden");
          document.getElementById("here").src = "shopee.html";
      } else {


      //   document.body.style.backgroundColor = "white";
      //   chrome.browserAction.setPopup({
      //     popup:"popup.html"
      //  });


          document.getElementById("lazada").removeAttribute("hidden");
          document.getElementById("shopee").setAttribute("hidden","");

       }
      


    }
  );

  

}, false)
