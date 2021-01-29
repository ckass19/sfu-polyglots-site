
			// define languagre reload anchors 
			var dataReload = document.querySelectorAll("[data-reload]");
			// language translater 
			var language = {
				eng: {
					welcome: "Welcome!"
				},
				es: {
					welcome: "Bienvenidos!"
				},
				fren: {
					welcome: "bienvenu!"
				},
				jpn: {
					welcome: "ようこそ"
				},
				mand: {
					welcome: "歓迎"
				}
			};
			// define language via window hash
			if (window.location.hash) {
				if(window.location.hash === "#es") {
					hi.textContent = language.es.welcome;
				}
				if(window.location.hash === "#jpn") {
					hi.textContent = language.jpn.welcome;
				}
				if(window.location.hash === "#mand") {
					hi.textContent = language.mand.welcome;
				}
			}
			// define language relord onlcik illieration 
			for(i = 0; i <= dataReload.length; i++){
				dataReload[i].onlcik = function() {
					location.reload(true);
				};
			}

onsubmit="return validations()"

let Program_box = document.getElementById('Name');
let Program = Name_box.value;
let Year_box = document.getElementById('"pref_name');
let Year = PName_box.value;
let NativeLanguage_box = document.getElementById('Name');
let NativeLanguage = Name_box.value;
let Fluent_box = document.getElementById('"pref_name');
let Fluent = PName_box.value;
let Interested_box = document.getElementById('Name');
let Interested = Name_box.value;
let Question_box = document.getElementById('"pref_name');
let Question = PName_box.value;
let Where_box = document.getElementById('Name');
let Where = Name_box.value;