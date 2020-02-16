function autofill() {
  chrome.tabs.executeScript({
    file: "autofill.js"
  });
}

function openCase() {
  window.open("https://app.case.org.sg/complaint.plx", "_blank");
}

function openShopee() {
  window.open(
    "https://help.shopee.sg/sg/s/topic/0TO6F000000QzHIWA0/returns-refunds",
    "_blank"
  );
}

function openLazada() {
  window.open(
    "https://www.lazada.sg/helpcenter/returns/?spm=a2o42.helpcenter.topics-list.3.4dbf455fSru0He",
    "_blank"
  );
}

function contactShopee() {
  window.open("https://help.shopee.sg/sg/s/contactus", "_blank");
}

function displayShopeeList() {
  document.getElementById("shopeeHeader").removeAttribute("hidden");
  document.getElementById("shopeeListItem1").removeAttribute("hidden");
  document.getElementById("shopeeListItem2").removeAttribute("hidden");
  document.getElementById("shopeeListItem3").removeAttribute("hidden");

  document.getElementById("lazadaHeader").setAttribute("hidden", "");
  document.getElementById("lazadaListItem1").setAttribute("hidden", "");
  document.getElementById("selectHeader").setAttribute("hidden", "");
}

function displayLazadaList() {
  document.getElementById("lazadaHeader").removeAttribute("hidden");
  document.getElementById("lazadaListItem1").removeAttribute("hidden");

  document.getElementById("shopeeHeader").setAttribute("hidden", "");
  document.getElementById("shopeeListItem1").setAttribute("hidden", "");
  document.getElementById("shopeeListItem2").setAttribute("hidden", "");
  document.getElementById("shopeeListItem3").setAttribute("hidden", "");
  document.getElementById("selectHeader").setAttribute("hidden", "");
}

function contactM2() {
  document.getElementById("dummyText").removeAttribute("hidden");

  var range = document.createRange();
  range.selectNode(document.getElementById("dummyText"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect

  alert("Copied message to clip board! [ctrl - v]");

  document.getElementById("dummyText").setAttribute("hidden", "");

  window.open("https://shopee.sg/kaxoe.sg", "_blank");
}

function contactM() {
  document.getElementById("dummyText").removeAttribute("hidden");

  var range = document.createRange();
  range.selectNode(document.getElementById("dummyText"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect

  alert("Copied message to clip board! [ctrl - v]");

  document.getElementById("dummyText").setAttribute("hidden", "");

  window.open("https://shopee.sg/worldgymsg", "_blank");
}

function showListHeaders() {
  document.getElementById("itemList").removeAttribute("hidden");
  document.getElementById("selectHeader").removeAttribute("hidden");

  document.getElementById("shopee").setAttribute("hidden", "");
  document.getElementById("lazada").setAttribute("hidden", "");
  document.getElementById("item").setAttribute("hidden", "");

  document.getElementById("item2").setAttribute("hidden", "");
  document.getElementById("shopeeListItem1").setAttribute("hidden", "");
  document.getElementById("shopeeListItem2").setAttribute("hidden", "");
  document.getElementById("shopeeListItem3").setAttribute("hidden", "");
  document.getElementById("lazadaListItem1").setAttribute("hidden", "");
  document.getElementById("shopeeHeader").setAttribute("hidden", "");
  document.getElementById("lazadaHeader").setAttribute("hidden", "");
}

function navigateItem() {
  document.getElementById("item").removeAttribute("hidden");
  document.getElementById("shopee").setAttribute("hidden", "");
  document.getElementById("lazada").setAttribute("hidden", "");
  document.getElementById("itemList").setAttribute("hidden", "");
  document.getElementById("selectHeader").setAttribute("hidden", "");
}

function navigateItem2() {
  document.getElementById("item2").removeAttribute("hidden");
  document.getElementById("shopee").setAttribute("hidden", "");
  document.getElementById("lazada").setAttribute("hidden", "");
  document.getElementById("itemList").setAttribute("hidden", "");
  document.getElementById("selectHeader").setAttribute("hidden", "");
}

function refreshList() {
  navigateList();
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    var slb = document.getElementById("shopeeListButton");
    if (slb != null) {
      slb.addEventListener("click", function() {
        displayShopeeList();
      });
    }

    var llb = document.getElementById("lazadaListButton");
    if (llb != null) {
      llb.addEventListener("click", function() {
        displayLazadaList();
      });
    }

    var contact = document.getElementById("contactSite");
    if (contact != null) {
      contact.addEventListener("click", function() {
        contactShopee();
      });
    }

    var contactMerchant0 = document.getElementById("contactMerchant0");
    if (contactMerchant0 != null) {
      contactMerchant0.addEventListener("click", function() {
        contactM();
      });
    }

    var contactMerchant = document.getElementById("contactMerchant");
    if (contactMerchant != null) {
      contactMerchant.addEventListener("click", function() {
        contactM2();
      });
    }

    var navigateHistory = document.getElementById("history");
    if (navigateHistory != null) {
      navigateHistory.addEventListener("click", function() {
        showListHeaders();
      });
    }

    var openShopeeHelp = document.getElementById("openShopee");
    if (openShopeeHelp != null) {
      openShopeeHelp.addEventListener("click", function() {
        openShopee();
      });
    }

    var openLazadaHelp = document.getElementById("openLazada");
    if (openLazadaHelp != null) {
      openLazadaHelp.addEventListener("click", function() {
        openLazada();
      });
    }

    var viewInformation = document.getElementById("viewInformation");
    if (viewInformation != null) {
      viewInformation.addEventListener("click", function() {
        navigateItem();
      });
    }
    var viewInformation0 = document.getElementById("viewInformation0");
    if (viewInformation0 != null) {
      viewInformation0.addEventListener("click", function() {
        navigateItem2();
      });
    }

    var refresh = document.getElementById("refresh");
    if (refresh != null) {
      refresh.addEventListener("click", function() {
        refreshList();
      });
    }

    var generateButton = document.getElementById("autoFill");
    if (generateButton != null) {
      generateButton.addEventListener("click", function() {
        autofill();
      });
    }

    var openCaseForm = document.getElementById("openCase");
    if (openCaseForm != null) {
      openCaseForm.addEventListener("click", function() {
        openCase();
      });
    }

    chrome.tabs.query(
      { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
      function(tabs) {
        var currUrl = tabs[0].url;

        if (currUrl.match("shopee")) {
          document.getElementById("shopee").removeAttribute("hidden");

          document.getElementById("lazada").setAttribute("hidden", "");
          document.getElementById("itemList").setAttribute("hidden", "");
          document.getElementById("item").setAttribute("hidden", "");
          document.getElementById("item2").setAttribute("hidden", "");
        } else if (currUrl.match("lazada")) {
          document.getElementById("lazada").removeAttribute("hidden");

          document.getElementById("shopee").setAttribute("hidden", "");
          document.getElementById("itemList").setAttribute("hidden", "");
          document.getElementById("item").setAttribute("hidden", "");
          document.getElementById("item2").setAttribute("hidden", "");
        } else if (currUrl.match("https://app.case.org.sg/complaint.plx")) {
          document.getElementById("itemList").removeAttribute("hidden");
          document.getElementById("shopee").setAttribute("hidden", "");
          document.getElementById("lazada").setAttribute("hidden", "");
          document.getElementById("item").setAttribute("hidden", "");
          document.getElementById("item2").setAttribute("hidden", "");
        } else {
          // UNCOMMENT HERE
          // document.getElementById("itemList").removeAttribute("hidden");

          document.getElementById("shopee").setAttribute("hidden", "");
          document.getElementById("lazada").setAttribute("hidden", "");
          document.getElementById("item").setAttribute("hidden", "");
          document.getElementById("item2").setAttribute("hidden", "");
        }
      }
    );
  },
  false
);

// $(".dropdown-menu li a").click(function() {
//   $(this)
//     .parents(".dropdown")
//     .find(".btn")
//     .html($(this).text() + ' <span class="caret"></span>');
//   $(this)
//     .parents(".dropdown")
//     .find(".btn")
//     .val($(this).data("value"));
// });

$(function() {
  $(".nature li a").click(function() {
    $(".natureBtn").text($(this).text());
    $(".natureBtn").val($(this).text());
  });
});
$(function() {
  $(".trans li a").click(function() {
    $(".transBtn").text($(this).text());
    $(".transBtn").val($(this).text());
  });
});
$(function() {
  $(".outcome li a").click(function() {
    $(".outcomeBtn").text($(this).text());
    $(".outcomeBtn").val($(this).text());
  });
});
