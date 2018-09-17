'use strict';

myApp.factory('datatableService', [ function(){
	return {
		// Fonction qui modifie la pagination dès que l'on change de page
		changePage: function(page, currentNbPages) {
			var currentPages = [];
			// Si le nombre de pages est inférieur à 8, alors on affiche tous les numéros de page
			if (currentNbPages < 8) {
				for (var i=0; i<currentNbPages; i++) {
					currentPages.push(i);
				}
			}
			// Si le nombre de pages est égal à 8, alors on affiche '...' au début ou à la fin en fonctionde la page actuelle
			else if (currentNbPages === 8) {
				if (page < 4) {
					for (var i=0; i<5; i++) {
						currentPages.push(i);
					}
					currentPages.push("...");
					currentPages.push(currentNbPages-1);
				}
				else {
					currentPages.push(1);
					currentPages.push("...");
					for (var i=3; i<currentNbPages; i++) {
						currentPages.push(i);
					}
				}
			}
			// Si le nombre de pages est supérieur à 8, on affichera '...' des deux côtés
			else if (currentNbPages > 8) {
				if (page < 4) {
					for (var i=0; i<5; i++) {
						currentPages.push(i);
					}
					currentPages.push("...");
					currentPages.push(currentNbPages-1);
				}
				else if (page >= currentNbPages-4){
					currentPages.push(0);
					currentPages.push("...");
					for (var i=currentNbPages-5; i<currentNbPages; i++) {
						currentPages.push(i);
					}
				}
				else {
					currentPages.push(0);
					currentPages.push("...");
					currentPages.push(page-1);
					currentPages.push(page);
					currentPages.push(page+1);
					currentPages.push("...");
					currentPages.push(currentNbPages-1);
				}
				
			}
			return currentPages;
		}
	};
}]);