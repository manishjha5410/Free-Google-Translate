let dom = document.createElement('script');
dom.setAttribute('type', 'text/javascript');
dom.setAttribute('src',"https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");

document.querySelector("head").append(dom);

function googleTranslateElementInit() {
	new google.translate.TranslateElement(
		{pageLanguage: 'en'},
		'google_translate_element'
    );

    for(var i=1;i<3;i++)
        document.querySelector(".skiptranslate.goog-te-gadget").childNodes[1].remove();

    console.log(document.querySelector(".goog-te-combo").childElementCount);


    document.querySelector(".goog-te-combo").onclick = () =>{
        document.querySelector(".goog-te-combo").childNodes.forEach((key, value) =>{
            console.log(key,value);
        })
    }

    document.querySelector("div#goog-gt-tt").remove();
}

