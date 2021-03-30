let dom = document.createElement('script');
dom.setAttribute('type', 'text/javascript');
dom.setAttribute('src',"https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");

document.querySelector("head").append(dom);

let languages = [];

function googleTranslateElementInit() {
	new google.translate.TranslateElement(
		{pageLanguage: 'en'},
		'google_translate_element'
    );

    for(var i=1;i<3;i++)
        document.querySelector(".skiptranslate.goog-te-gadget").childNodes[1].remove();

    document.querySelector(".goog-te-combo").classList.add("form-select");

    document.querySelector(".goog-te-combo").onclick = function()
    {
        languages = [];
        document.querySelector(".goog-te-combo").childNodes.forEach((key) =>{
            languages.push(key.innerHTML);
        });
        console.log(languages);
    }


    document.querySelector("div#goog-gt-tt").remove();
    document.querySelector(".goog-te-spinner-pos").remove();

}

document.onmouseover = function(){
    if(document.querySelector(".goog-te-menu-frame")!==null){
        document.querySelectorAll(".goog-te-menu-frame").forEach(key=>key.remove());
    }
}


function makeChange()
{
    document.querySelector(".goog-te-combo").selectedIndex = languages.indexOf(document.querySelector("#myInput").value);
    var element = document.querySelector(".goog-te-combo");
    if ("createEvent" in document) {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        element.dispatchEvent(evt);
    }
    else
        element.fireEvent("onchange");
}

/*
*---------------------------------------------*
*/



document.onmouseover = function() {


    /*
*---------------------------------------------*
*/
document.querySelector(".goog-te-combo").click();

function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });

    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }

  autocomplete(document.getElementById("myInput"), languages);
}

if(!navigator.onLine)
{
    alert("Offline");
}