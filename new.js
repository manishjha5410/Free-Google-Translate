let dom = document.createElement('script');
dom.setAttribute('type', 'text/javascript');
dom.setAttribute('src',"https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");

document.querySelector("head").append(dom);

function removeWaste()
{
    document.querySelector("div#goog-gt-tt").remove();
    document.querySelector(".goog-te-spinner-pos").remove();

    for(var i=1;i<3;i++)
        document.querySelector(".skiptranslate.goog-te-gadget").childNodes[1].remove();

    document.onmouseover = function()
    {
        if(document.querySelector(".goog-te-menu-frame")!==null)
            document.querySelectorAll(".goog-te-menu-frame").forEach(key=>key.remove());
    }
}

function getData()
{
    let languages;

    try
    {
        document.querySelector(".goog-te-combo").onclick = function()
        {
            languages = [];
            document.querySelector(".goog-te-combo").childNodes.forEach((key) =>{
                languages.push(key.innerHTML);
            });
        }

        document.querySelector(".goog-te-combo").click();
    }
    catch(E)
    {console.log("Wait for sometime since internet is slow")}

    return languages;
}

function googleTranslateElementInit()
{
    new google.translate.TranslateElement
    (
		{pageLanguage: 'en'},
		'google_translate_element'
    );


    removeWaste();
    getData();
}


function setData()
{
    var element = document.querySelector(".goog-te-combo");
    element.selectedIndex = getIndex();
    if ("createEvent" in document) {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        element.dispatchEvent(evt);
    }
    else
        element.fireEvent("onchange");
}