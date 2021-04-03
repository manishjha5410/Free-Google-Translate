# Free Google Translate 
Add Multilingual Feature to Your Website with free Google Translate with just **1 JS File** and **1 CSS** File

[![License: MIT LICENSE](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/manishjha5410/Free-Google-Translate/blob/main/LICENSE)

## Demo
<img src="https://manishjha5410.github.io/Free-Google-Translate/sample/video/demo.gif" width="100%">

## Project Structure

```
.
├── translate.js            	-> File for JS functionalities
├── index.html                  -> HTML file for demo
├── LICENSE                     -> For Copy Right Issue
├── README.md                   -> ReadMe File
└── translate.css               -> File for adding Styles
```

## Process
- Step 1 => Include the `translate.js` [Link](https://github.com/manishjha5410/Free-Google-Translate/blob/main/translate.js "translate.js") and `translate.css` [Link](https://github.com/manishjha5410/Free-Google-Translate/blob/main/translate.css "translate.css") 
> As
 ```html
 <link rel="stylesheet" href="translate.css" />
 <script defer type="text/javascript" src="translate.js"></script>
 ```
- Step 2 => Just make any one of the following:-
>An ul list or a select tag or any one in which you can prefer to add a list of options of languages
- Step 3 => There are two utility javascript function
```js
getData(); & setData(language);
```
>**getData()** is used to get all languages it return an array of languages
>**setData()** takes an argument `string` language and change the website language to that language. If no such language found it would return false else true.
- Step 4 => Just Call The function setData() which you  prefer to be the webpage Language.
```js
function getIndex()
{
 setData(document.querySelector("#translateInput").value);
}
```
- Step 5 => If you want not to translate just add a notranslate class for that element. Eg:-
```html
<p class="notranslate">I am feeling Well</p>
```
## Language Support

<details><summary><b>CLICK ME</b> - Supported Languages</summary>


* Afrikaans
* Albanian
* Amharic
* Arabic
* Armenian
* Azerbaijani
* Basque
* Belarusian
* Bengali
* Bosnian
* Bulgarian
* Catalan
* Cebuano
* Chichewa
* Chinese (Simplified)
* Chinese (Traditional)
* Corsican
* Croatian
* Czech
* Danish
* Dutch
* Esperanto
* Estonian
* Filipino
* Finnish
* French
* Frisian
* Galician
* Georgian
* German
* Greek
* Gujarati
* Haitian Creole
* Hausa
* Hawaiian
* Hebrew
* Hindi
* Hmong
* Hungarian
* Icelandic
* Igbo
* Indonesian
* Irish
* Italian
* Japanese
* Javanese
* Kannada
* Kazakh
* Khmer
* Kinyarwanda
* Korean
* Kurdish (Kurmanji)
* Kyrgyz
* Lao
* Latin
* Latvian
* Lithuanian
* Luxembourgish
* Macedonian
* Malagasy
* Malay
* Malayalam
* Maltese
* Maori
* Marathi
* Mongolian
* Myanmar (Burmese)
* Nepali
* Norwegian
* Odia (Oriya)
* Pashto
* Persian
* Polish
* Portuguese
* Punjabi
* Romanian
* Russian
* Samoan
* Scots Gaelic
* Serbian
* Sesotho
* Shona
* Sindhi
* Sinhala
* Slovak
* Slovenian
* Somali
* Spanish
* Sundanese
* Swahili
* Swedish
* Tajik
* Tamil
* Tatar
* Telugu
* Thai
* Turkish
* Turkmen
* Ukrainian
* Urdu
* Uyghur
* Uzbek
* Vietnamese
* Welsh
* Xhosa
* Yiddish
* Yoruba
* Zulu

</details>

## Try Manually
Use This [LINK](https://manishjha5410.github.io/Free-Google-Translate/)

## Support
If you Like my work please give a star [⭐](https://github.com/manishjha5410/Free-Google-Translate/stargazers)

## Run Locally
- Just checkout the demo branch and run the index.html File

# CopyRight &copy; are restricted License under [MIT License](LICENSE)
