
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

	
