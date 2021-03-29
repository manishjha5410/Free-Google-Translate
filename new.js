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

    document.querySelector("div#goog-gt-tt").remove();
    document.querySelector(".goog-te-spinner-pos").remove();
}

document.onmouseover = function(){
    if(document.querySelector(".goog-te-menu-frame")!==null){
        document.querySelectorAll(".goog-te-menu-frame").forEach(key=>key.remove());
    }
}
