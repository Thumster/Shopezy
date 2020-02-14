  
function autofill() {

  chrome.tabs.executeScript({
      file: 'autofill.js'
  });

}

function openCase() {

  window.open("https://app.case.org.sg/complaint.plx", "_blank"); 

}

document.addEventListener('DOMContentLoaded', function () {
  
          var button = document.getElementById('generate');
          button.addEventListener('click', function () {
              autofill();
          });

          var button = document.getElementById('openCase');
          button.addEventListener('click', function () {
              openCase();
          });

  chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
    function(tabs){


      var currUrl = tabs[0].url;

      if(currUrl == "https://shopee.sg/") {
        document.body.style.backgroundColor = "orange";
      
          document.getElementById("lazada").setAttribute("hidden","");
          document.getElementById("shopee").removeAttribute("hidden");
          
          //document.getElementById("dynamicContent").src = "shopee.html";

          
          

          //autofill();

          // $(function(){
          //   $("#dynamicContent").load("shopee.html"); 
          // });
          

      } else {
      


        document.getElementById("lazada").removeAttribute("hidden");
        document.getElementById("shopee").setAttribute("hidden","");


        // if(confirm("do you want to launch case complaint?")){
        //   if(currUrl == "https://app.case.org.sg/complaint.plx") {
        //   autofill();
        // } else {
        //   openCase();
        // }

        // }

        
          
      

       } 
      


    }
  );
  

}, false)

