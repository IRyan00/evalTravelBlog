const articles = [
	{ id: "1", img: '../assets/images/paris.jpg', title: 'Paris, France', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque beatae ipsum aspernatur excepturi totam exercitationem incidunt blanditiis quis laboriosam veniam at, qui alias enim, fugiat consequuntur aut adipisci aliquid quas omnis repellendus mollitia et ratione. Quos error laborum repudiandae consequatur repellat autem nihil neque voluptatum provident rem cupiditate reiciendis, quam iste ipsum incidunt porro ullam? Quas eveniet repudiandae sapiente necessitatibus. Unde reprehenderit nemo, explicabo possimus incidunt soluta veritatis! Earum suscipit sunt iusto aliquid rerum placeat nobis perspiciatis consequatur, eum quaerat cum accusamus alias nisi beatae quae in reiciendis quod facere necessitatibus ipsam sapiente. Eligendi aut cum iusto nam veniam?', desc2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque beatae ipsum aspernatur excepturi totam exercitationem incidunt blanditiis quis laboriosam veniam at, qui alias enim, fugiat consequuntur aut adipisci aliquid quas omnis repellendus mollitia et ratione. Quos error laborum repudiandae consequatur repellat autem nihil neque voluptatum provident rem cupiditate reiciendis, quam iste ipsum incidunt porro ullam? Quas eveniet repudiandae sapiente necessitatibus. Unde reprehenderit nemo, explicabo possimus incidunt soluta veritatis! Earum suscipit sunt iusto aliquid rerum placeat nobis perspiciatis consequatur, eum quaerat cum accusamus alias nisi beatae quae in reiciendis quod facere necessitatibus ipsam sapiente. Eligendi aut cum iusto nam veniam?" },
	{ id: "2", img: '../assets/images/berlin.jpg', title: 'Berlin, Allemagne', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque beatae ipsum aspernatur excepturi totam exercitationem incidunt blanditiis quis laboriosam veniam at, qui alias enim, fugiat consequuntur aut adipisci aliquid quas omnis repellendus mollitia et ratione. Quos error laborum repudiandae consequatur repellat autem nihil neque voluptatum provident rem cupiditate reiciendis, quam iste ipsum incidunt porro ullam? Quas eveniet repudiandae sapiente necessitatibus. Unde reprehenderit nemo, explicabo possimus incidunt soluta veritatis! Earum suscipit sunt iusto aliquid rerum placeat nobis perspiciatis consequatur, eum quaerat cum accusamus alias nisi beatae quae in reiciendis quod facere necessitatibus ipsam sapiente. Eligendi aut cum iusto nam veniam?', desc2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque beatae ipsum aspernatur excepturi totam exercitationem incidunt blanditiis quis laboriosam veniam at, qui alias enim, fugiat consequuntur aut adipisci aliquid quas omnis repellendus mollitia et ratione. Quos error laborum repudiandae consequatur repellat autem nihil neque voluptatum provident rem cupiditate reiciendis, quam iste ipsum incidunt porro ullam? Quas eveniet repudiandae sapiente necessitatibus. Unde reprehenderit nemo, explicabo possimus incidunt soluta veritatis! Earum suscipit sunt iusto aliquid rerum placeat nobis perspiciatis consequatur, eum quaerat cum accusamus alias nisi beatae quae in reiciendis quod facere necessitatibus ipsam sapiente. Eligendi aut cum iusto nam veniam?" },
	{ id: "3", img: '../assets/images/prague.jpg', title: 'Prague, Tchéquie', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque beatae ipsum aspernatur excepturi totam exercitationem incidunt blanditiis quis laboriosam veniam at, qui alias enim, fugiat consequuntur aut adipisci aliquid quas omnis repellendus mollitia et ratione. Quos error laborum repudiandae consequatur repellat autem nihil neque voluptatum provident rem cupiditate reiciendis, quam iste ipsum incidunt porro ullam? Quas eveniet repudiandae sapiente necessitatibus. Unde reprehenderit nemo, explicabo possimus incidunt soluta veritatis! Earum suscipit sunt iusto aliquid rerum placeat nobis perspiciatis consequatur, eum quaerat cum accusamus alias nisi beatae quae in reiciendis quod facere necessitatibus ipsam sapiente. Eligendi aut cum iusto nam veniam?', desc2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque beatae ipsum aspernatur excepturi totam exercitationem incidunt blanditiis quis laboriosam veniam at, qui alias enim, fugiat consequuntur aut adipisci aliquid quas omnis repellendus mollitia et ratione. Quos error laborum repudiandae consequatur repellat autem nihil neque voluptatum provident rem cupiditate reiciendis, quam iste ipsum incidunt porro ullam? Quas eveniet repudiandae sapiente necessitatibus. Unde reprehenderit nemo, explicabo possimus incidunt soluta veritatis! Earum suscipit sunt iusto aliquid rerum placeat nobis perspiciatis consequatur, eum quaerat cum accusamus alias nisi beatae quae in reiciendis quod facere necessitatibus ipsam sapiente. Eligendi aut cum iusto nam veniam?" },
	{ id: "4", img: '../assets/images/bled.jpg', title: 'Bled, Slovénie', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque beatae ipsum aspernatur excepturi totam exercitationem incidunt blanditiis quis laboriosam veniam at, qui alias enim, fugiat consequuntur aut adipisci aliquid quas omnis repellendus mollitia et ratione. Quos error laborum repudiandae consequatur repellat autem nihil neque voluptatum provident rem cupiditate reiciendis, quam iste ipsum incidunt porro ullam? Quas eveniet repudiandae sapiente necessitatibus. Unde reprehenderit nemo, explicabo possimus incidunt soluta veritatis! Earum suscipit sunt iusto aliquid rerum placeat nobis perspiciatis consequatur, eum quaerat cum accusamus alias nisi beatae quae in reiciendis quod facere necessitatibus ipsam sapiente. Eligendi aut cum iusto nam veniam?', desc2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque beatae ipsum aspernatur excepturi totam exercitationem incidunt blanditiis quis laboriosam veniam at, qui alias enim, fugiat consequuntur aut adipisci aliquid quas omnis repellendus mollitia et ratione. Quos error laborum repudiandae consequatur repellat autem nihil neque voluptatum provident rem cupiditate reiciendis, quam iste ipsum incidunt porro ullam? Quas eveniet repudiandae sapiente necessitatibus. Unde reprehenderit nemo, explicabo possimus incidunt soluta veritatis! Earum suscipit sunt iusto aliquid rerum placeat nobis perspiciatis consequatur, eum quaerat cum accusamus alias nisi beatae quae in reiciendis quod facere necessitatibus ipsam sapiente. Eligendi aut cum iusto nam veniam?" },
	{ id: "5", img: '../assets/images/manaus.webp', title: 'Manaus, Brésil', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque beatae ipsum aspernatur excepturi totam exercitationem incidunt blanditiis quis laboriosam veniam at, qui alias enim, fugiat consequuntur aut adipisci aliquid quas omnis repellendus mollitia et ratione. Quos error laborum repudiandae consequatur repellat autem nihil neque voluptatum provident rem cupiditate reiciendis, quam iste ipsum incidunt porro ullam? Quas eveniet repudiandae sapiente necessitatibus. Unde reprehenderit nemo, explicabo possimus incidunt soluta veritatis! Earum suscipit sunt iusto aliquid rerum placeat nobis perspiciatis consequatur, eum quaerat cum accusamus alias nisi beatae quae in reiciendis quod facere necessitatibus ipsam sapiente. Eligendi aut cum iusto nam veniam?', desc2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque beatae ipsum aspernatur excepturi totam exercitationem incidunt blanditiis quis laboriosam veniam at, qui alias enim, fugiat consequuntur aut adipisci aliquid quas omnis repellendus mollitia et ratione. Quos error laborum repudiandae consequatur repellat autem nihil neque voluptatum provident rem cupiditate reiciendis, quam iste ipsum incidunt porro ullam? Quas eveniet repudiandae sapiente necessitatibus. Unde reprehenderit nemo, explicabo possimus incidunt soluta veritatis! Earum suscipit sunt iusto aliquid rerum placeat nobis perspiciatis consequatur, eum quaerat cum accusamus alias nisi beatae quae in reiciendis quod facere necessitatibus ipsam sapiente. Eligendi aut cum iusto nam veniam?" },
	{ id: "6", img: '../assets/images/almaty.jpg', title: 'Almaty, Kazakhstan', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque beatae ipsum aspernatur excepturi totam exercitationem incidunt blanditiis quis laboriosam veniam at, qui alias enim, fugiat consequuntur aut adipisci aliquid quas omnis repellendus mollitia et ratione. Quos error laborum repudiandae consequatur repellat autem nihil neque voluptatum provident rem cupiditate reiciendis, quam iste ipsum incidunt porro ullam? Quas eveniet repudiandae sapiente necessitatibus. Unde reprehenderit nemo, explicabo possimus incidunt soluta veritatis! Earum suscipit sunt iusto aliquid rerum placeat nobis perspiciatis consequatur, eum quaerat cum accusamus alias nisi beatae quae in reiciendis quod facere necessitatibus ipsam sapiente. Eligendi aut cum iusto nam veniam?', desc2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque beatae ipsum aspernatur excepturi totam exercitationem incidunt blanditiis quis laboriosam veniam at, qui alias enim, fugiat consequuntur aut adipisci aliquid quas omnis repellendus mollitia et ratione. Quos error laborum repudiandae consequatur repellat autem nihil neque voluptatum provident rem cupiditate reiciendis, quam iste ipsum incidunt porro ullam? Quas eveniet repudiandae sapiente necessitatibus. Unde reprehenderit nemo, explicabo possimus incidunt soluta veritatis! Earum suscipit sunt iusto aliquid rerum placeat nobis perspiciatis consequatur, eum quaerat cum accusamus alias nisi beatae quae in reiciendis quod facere necessitatibus ipsam sapiente. Eligendi aut cum iusto nam veniam?" },
];


function getIdFromUrl() {
	const params = new URLSearchParams(window.location.search);
	return params.get("id");
}

function displayContent() {
	const id = getIdFromUrl();
	const content = document.getElementById("content");

	const article = articles.find((item) => item.id === id);

	if (article) {
		content.innerHTML = `
			<h1 class="h1 text-center py-5 fw-bold">${article.title}</h1>
			<p class="col-10 mx-auto">${article.desc}</p>
			<p class="col-10 mx-auto">${article.desc2}</p>
			<div class="d-flex justify-content-center col-8 mx-auto">
				<img src="${article.img}" class="img-fluid my-5 rounded-3">
       		</div>
        `;
	} else {
		content.innerHTML = "<p>Cet article est probablement supprimé ou en cours d'écriture...</p>";
	}
}

displayContent()


// DARKMODE
const body = document.querySelector('body')
const check = document.querySelector('#checkbox')

check.addEventListener('change', function () {
	body.classList.toggle('dark')
});