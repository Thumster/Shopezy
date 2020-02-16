function autofill() {

    chrome.tabs.executeScript({
        file: 'autofill.js'
    });

}

function openCase() {
    window.open("https://app.case.org.sg/complaint.plx", "_blank");
}

function openShopee() {
    window.open("https://help.shopee.sg/sg/s/topic/0TO6F000000QzHIWA0/returns-refunds", "_blank");
}

function openLazada() {
    window.open("https://www.lazada.sg/helpcenter/returns/?spm=a2o42.helpcenter.topics-list.3.4dbf455fSru0He", "_blank");
}

function contactShopee() {
    window.open("https://help.shopee.sg/sg/s/contactus", "_blank");

}

function navigateList() {

    document.getElementById("itemList").removeAttribute("hidden");
    document.getElementById("shopee").setAttribute("hidden", "");
    document.getElementById("lazada").setAttribute("hidden", "");
    document.getElementById("item").setAttribute("hidden", "");

}


function navigateItem() {

    document.getElementById("item").removeAttribute("hidden");
    document.getElementById("shopee").setAttribute("hidden", "");
    document.getElementById("lazada").setAttribute("hidden", "");
    document.getElementById("itemList").setAttribute("hidden", "");

}

document.addEventListener('DOMContentLoaded', function() {

    var contact = document.getElementById('contactSite');
    if (contact != null) {
        contact.addEventListener('click', function() {
            contactShopee();
        });
    }

    var navigateHistory = document.getElementById('history');
    if (navigateHistory != null) {
        navigateHistory.addEventListener('click', function() {
            navigateList();
        });
    }

    var openShopeeHelp = document.getElementById('openShopee');
    if (openShopeeHelp != null) {
        openShopeeHelp.addEventListener('click', function() {
            openShopee();
        });
    }

    var openLazadaHelp = document.getElementById('openLazada');
    if (openLazadaHelp != null) {
        openLazadaHelp.addEventListener('click', function() {
            openLazada();
        });
    }

    var viewInformation = document.getElementById('viewInformation');
    if (viewInformation != null) {
        viewInformation.addEventListener('click', function() {
            navigateItem();
        });
    }

    var generateButton = document.getElementById('autoFill');
    if (generateButton != null) {
        generateButton.addEventListener('click', function() {
            autofill();
        });
    }

    var openCaseForm = document.getElementById('openCase');
    if (openCaseForm != null) {
        openCaseForm.addEventListener('click', function() {
            openCase();
        });
    }

    chrome.tabs.query({ 'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT },
        function(tabs) {


            var currUrl = tabs[0].url;

            if (currUrl.match("shopee")) {


                document.getElementById("shopee").removeAttribute("hidden");

                document.getElementById("lazada").setAttribute("hidden", "");
                document.getElementById("itemList").setAttribute("hidden", "");
                document.getElementById("item").setAttribute("hidden", "");



            } else if (currUrl.match("lazada")) {



                document.getElementById("lazada").removeAttribute("hidden");

                document.getElementById("shopee").setAttribute("hidden", "");
                document.getElementById("itemList").setAttribute("hidden", "");
                document.getElementById("item").setAttribute("hidden", "");


            } else if (currUrl.match("https://app.case.org.sg/complaint.plx")) {

                document.getElementById("itemList").removeAttribute("hidden");
                document.getElementById("shopee").setAttribute("hidden", "");
                document.getElementById("lazada").setAttribute("hidden", "");
                document.getElementById("item").setAttribute("hidden", "");


            } else {

                document.getElementById("itemList").removeAttribute("hidden");

                document.getElementById("shopee").setAttribute("hidden", "");
                document.getElementById("lazada").setAttribute("hidden", "");
                document.getElementById("item").setAttribute("hidden", "");

            }
        }
    );


}, false)