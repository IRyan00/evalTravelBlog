// DARKMODE
const body = document.querySelector('body')
const check = document.querySelector('#checkbox')

check.addEventListener('change', function () {
	body.classList.toggle('dark')
});