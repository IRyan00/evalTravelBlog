let myMap = L.map("map").setView([43.493933099243286, -1.4931438459626258], 5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	maxZoom: 20
}).addTo(myMap);

let sfo_marker1 = L.marker([48.857232, 2.352586]).addTo(myMap);
let sfo_marker2 = L.marker([52.519012, 13.377164]).addTo(myMap);


sfo_marker1.bindPopup('<b><span id="popupLink1">Paris</span></b>');
sfo_marker2.bindPopup('<b><span id="popupLink2">Berlin</span></b>');

// Ajoute un écouteur d'événement sur la carte pour détecter l'ouverture d'un popup
myMap.on('popupopen', () => {

	// Récupère l'élément avec l'ID 'popupLink' à l'intérieur du popup
	document.getElementById('popupLink1').addEventListener('click', () => {

		// Redirige l'utilisateur vers une URL spécifique lorsqu'il clique sur le lien
		window.location.href = "";
	});
});


// DARKMODE
const body = document.querySelector('body')
const check = document.querySelector('#checkbox')

check.addEventListener('change', function () {
	body.classList.toggle('dark')
});