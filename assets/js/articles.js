const articles = [
	{ img: '../assets/images/paris.jpg', title: 'Paris', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque beatae ipsum aspernatur excepturi totam exercitationem incidunt blanditiis quis laboriosam veniam at, qui alias enim, fugiat consequuntur aut adipisci aliquid quas omnis repellendus mollitia et ratione. Quos error laborum repudiandae consequatur repellat autem nihil neque voluptatum provident rem cupiditate reiciendis, quam iste ipsum incidunt porro ullam? Quas eveniet repudiandae sapiente necessitatibus. Unde reprehenderit nemo, explicabo possimus incidunt soluta veritatis! Earum suscipit sunt iusto aliquid rerum placeat nobis perspiciatis consequatur, eum quaerat cum accusamus alias nisi beatae quae in reiciendis quod facere necessitatibus ipsam sapiente. Eligendi aut cum iusto nam veniam?' },
	{ img: '../assets/images/berlin.jpg', title: 'Berlin', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque beatae ipsum aspernatur excepturi totam exercitationem incidunt blanditiis quis laboriosam veniam at, qui alias enim, fugiat consequuntur aut adipisci aliquid quas omnis repellendus mollitia et ratione. Quos error laborum repudiandae consequatur repellat autem nihil neque voluptatum provident rem cupiditate reiciendis, quam iste ipsum incidunt porro ullam? Quas eveniet repudiandae sapiente necessitatibus. Unde reprehenderit nemo, explicabo possimus incidunt soluta veritatis! Earum suscipit sunt iusto aliquid rerum placeat nobis perspiciatis consequatur, eum quaerat cum accusamus alias nisi beatae quae in reiciendis quod facere necessitatibus ipsam sapiente. Eligendi aut cum iusto nam veniam?' },
	{ img: '../assets/images/berlin.jpg', title: 'Berlin', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque beatae ipsum aspernatur excepturi totam exercitationem incidunt blanditiis quis laboriosam veniam at, qui alias enim, fugiat consequuntur aut adipisci aliquid quas omnis repellendus mollitia et ratione. Quos error laborum repudiandae consequatur repellat autem nihil neque voluptatum provident rem cupiditate reiciendis, quam iste ipsum incidunt porro ullam? Quas eveniet repudiandae sapiente necessitatibus. Unde reprehenderit nemo, explicabo possimus incidunt soluta veritatis! Earum suscipit sunt iusto aliquid rerum placeat nobis perspiciatis consequatur, eum quaerat cum accusamus alias nisi beatae quae in reiciendis quod facere necessitatibus ipsam sapiente. Eligendi aut cum iusto nam veniam?' },
];

// const allArticles = document.getElementById('allArticles')

articles.forEach(article => {
	document.getElementById('allArticles').innerHTML += `
	<div class="card mx-auto mb-5 px-0" col-lg-2 style="width: 20rem;">
		<img src="${article.img}" class="card-img-top card-img" alt="${article.title}">
		<div class="card-body">
			<h5 class="card-title text-center fw-bold">${article.title}</h5>
			<p class="card-text text-justify">"${article.desc.slice(0, 250)}..."</p>
			<div class="d-flex justify-content-center">
				<a href="./infosMovie.html?id=${article.id}" class="btn">Lire l'article</a>
			</div>
		</div>
	</div>
	`
})

// DARKMODE
const body = document.querySelector('body')
const check = document.querySelector('#checkbox')

check.addEventListener('change', function () {
	body.classList.toggle('dark')
});