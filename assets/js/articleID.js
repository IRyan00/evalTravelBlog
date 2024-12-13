let myParam = new URLSearchParams(window.location.search);
let myID = myParam.get("id");

console.log(myID);


let APIKEY = "20c7592d";
let URL = "./articles.js" + myID;

console.log(URL);


function newCard() {

	fetch(URL)
		.then(response => response.json())
		.then(data => {
			let myResult = data;
			console.log(myResult);

			document.getElementById('contentInfos').innerHTML += `
				<div class="my-5 row justify-content-center align-items-center gap-5">
					<div class="col-5">
						<img src="${data.Poster}" class="card-img-top rounded-4" alt="${data.Title} de ${data.Year}">
					</div>

					<div class="col-5">
						<h1 class="mt-3 mb-5">${data.Title} (${data.Year})</h1>
						<p class="my-3">Release: ${data.Released}</p>
						<p class="my-3">Genre: ${data.Genre}</p>
						<p class="my-3">Runtime: ${data.Runtime}</p>
						<p class="my-3">Rating: ${data.Rated}</p>
						<p class="my-3">Metascore: ${data.Metascore}</p>
						<p class="my-3">Director: ${data.Director}</p>
						<p class="my-3">Writers: ${data.Writer}</p>
						<p class="my-3">Actors: ${data.Actors}</p>
						<p class="my-3">Plot: ${data.Plot}</p>
						<button type="button" class="btn btn-success">Buy</button>
					</div>
				</div>
			`
		})
		.catch(error => console.error("error", error));
}

newCard()