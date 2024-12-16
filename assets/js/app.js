// MAP
let myMap = L.map("map").setView([43.493933099243286, -1.4931438459626258], 5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	maxZoom: 20
}).addTo(myMap);

let parisPin = L.marker([48.857232, 2.352586]).addTo(myMap);
let berlinPin = L.marker([52.519012, 13.377164]).addTo(myMap);
let praguePin = L.marker([50.087064, 14.417694]).addTo(myMap);
let bledPin = L.marker([46.367754, 14.111616]).addTo(myMap);
let manausPin = L.marker([-3.112044, -60.007570]).addTo(myMap);
let almatyPin = L.marker([43.240727, 76.923102]).addTo(myMap);

parisPin.bindPopup('<b><span class="popupLink" data-id="1">Paris, France</span></b>');
berlinPin.bindPopup('<b><span class="popupLink" data-id="2">Berlin, Allemagne</span></b>');
praguePin.bindPopup('<b><span class="popupLink" data-id="3">Prague, Tchéquie</span></b>');
bledPin.bindPopup('<b><span class="popupLink" data-id="4">Bled, Slovénie</span></b>');
manausPin.bindPopup('<b><span class="popupLink" data-id="5">Manaus, Brésil</span></b>');
almatyPin.bindPopup('<b><span class="popupLink" data-id="6">Almaty, Kazakhstan</span></b>');

myMap.on('popupopen', () => {
	document.querySelectorAll('.popupLink').forEach(link => {
		link.addEventListener('click', (event) => {
			const id = event.target.getAttribute('data-id');
			if (id) {
				window.location.href = `/templates/articleID.html?id=${id}`;
			}
		});
	});
});


// DARKMODE
const body = document.querySelector('body')
const check = document.querySelector('#checkbox')

check.addEventListener('change', function () {
	body.classList.toggle('dark')
});