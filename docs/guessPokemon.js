let grid = document.getElementById("grid");
let panel = document.getElementById("mainPanel");
let header = document.getElementById("header");
let allInputElements = document.getElementById("allInputElements");
let pokemonNameInput = document.getElementById("pokemonName");
let guessButton = document.getElementById("guessButton");
let token = "";
const attempts = []
const urlParams = new URLSearchParams(window.location.search);
token = urlParams.get("Auth");

pokemonNameInput.addEventListener("keypress", (event) => {
	if (event.key == "Enter") guessButton.click();
});

function Guess() {
	pokemonName = pokemonNameInput.value;

	const uri = ("https://socorro-postabdominal-nongeologically.ngrok-free.dev/pokemon/guess");
	const options = {
		method: "GET",
		headers: {
			"Authorization": token,
			"Pokemon": pokemonName,
			"ngrok-skip-browser-warning": "lala"
		}
	};
	fetch(uri, options)
		.then(response => {
			let responseJson = response.json();
			let responseCode = response.status;
			if (responseCode === 400) {
				throw "Nome de pokemon invalido";
			}
			if (responseCode === 500) {
				throw "Um erro inesperado ocorreu"
			}
			return responseJson;
		}).then(json => {
			if (attempts.includes(json.Id)) {
				throw "Pokemon Repetido"
			}
			attempts.push(parseInt(JSON.stringify(json.Id)))
			getPokemonError.style.display = "none";
			grid.classList.replace("pt-1", "pt-3");
			let pokemonContainer = document.getElementById("pokemonContainer");

			let pokemonNestedRowElement = document.createElement("div");
			let imgColElement = document.createElement("div");

			let imgElement = document.createElement("img");
			let idElement = document.createElement("div");
			let type1Element = document.createElement("div");
			let type2Element = document.createElement("div");
			let genElement = document.createElement("div");
			let colorElement = document.createElement("div");
			let endClassExample = "col-4 col-sm-2 bg-my-light p-2 my-max-width bg-opacity-10 border-start-0 rounded-end p-3 border border-3 border-my-dark-red align-items-center fw-bold "
			let middleClassExample = "col-4 col-sm-2 bg-my-light p-2 my-max-width bg-opacity-10 border-start-0 border-end-0 p-3 border border-3 border-my-dark-red align-items-center fw-bold "
			pokemonNestedRowElement.className = "row h-100 text-center justify-content-center mt-2";
			imgColElement.className = "col-4 col-sm-2 border p-2 my-max-width w-5 border-3 border-my-dark-red rounded-start bg-opacity-10 border-end-0 align-self-center bg-my-light";


			idElement.className = middleClassExample;
			type1Element.className = middleClassExample;
			type2Element.className = middleClassExample;
			genElement.className = middleClassExample;
			colorElement.className = endClassExample;

			let idBg = getBgColor(json.Answers[0]);
			let type1Bg = getBgColor(json.Answers[1]);
			let type2Bg = getBgColor(json.Answers[2]);
			let genBg = getBgColor(json.Answers[3]);
			let colorBg = getBgColor(json.Answers[4]);

			let id = parseInt(JSON.stringify(json.Id)).toString();
			let type1 = JSON.stringify(json.Types[0]).substring(1, JSON.stringify(json.Types[0]).length - 1)
			let type2 = "None"
			if (json.Types.length > 1) {
				type2 = JSON.stringify(json.Types[1]).substring(1, JSON.stringify(json.Types[1]).length - 1)
			}

			gen = JSON.stringify(json.Gen).substring(1, JSON.stringify(json.Gen).length - 1)
			let color = JSON.stringify(json.Color).substring(1, JSON.stringify(json.Color).length - 1)

			idElement.innerHTML = 'id: <br><div class="fw-bold border-1 border-my-dark-red rounded align-self-center ' + idBg + '">' + id + '</div>'
			type1Element.innerHTML = 'type 1:<br><div class="fw-bold border-1 border-my-dark-red rounded align-self-center ' + type1Bg + '">' + type1 + '</div>'
			type2Element.innerHTML = 'type 2:<br><div class="fw-bold border-1 border-my-dark-red rounded align-self-center ' + type2Bg + '">' + type2 + '</div>'
			genElement.innerHTML = 'gen: <br><div class="fw-bold border-1 border-my-dark-red rounded align-self-center ' + genBg + '">' + gen + '</div>'
			colorElement.innerHTML = 'color: <br><div class="fw-bold border-1 border-my-dark-red rounded align-self-center ' + colorBg + '">' + color + '</div>'


			imgElement.src = JSON.stringify(json.Sprite).substring(1, JSON.stringify(json.Sprite).length - 1);

			imgColElement.appendChild(imgElement);

			pokemonNestedRowElement.appendChild(imgColElement);

			pokemonNestedRowElement.appendChild(idElement);
			pokemonNestedRowElement.appendChild(type1Element);
			pokemonNestedRowElement.appendChild(type2Element);
			pokemonNestedRowElement.appendChild(genElement);
			pokemonNestedRowElement.appendChild(colorElement);

			pokemonContainer.prepend(pokemonNestedRowElement);

			pokemonNameInput.value = "";
			if (json.Answers[0] === "right") {
				pokemonNameInput.remove()
				guessButton.remove()
				header.innerHTML = "Parabéns"

				let congratulations = document.createElement("div");
				congratulations.innerHTML = 'Você acertou em:<br>' + attempts.length +' tentativas'
				congratulations.className = "text-center text-my-dark h2"

				let tryAgainButton = document.createElement("button");
				tryAgainButton.className = "btn btn-danger bg-my-dark border-my-dark-red border-2 text-my-light fs-5"
				tryAgainButton.innerHTML = "Tentar denovo"
				tryAgainButton.onclick = tryAgain;
				tryAgainButton.type = "button"

				allInputElements.prepend(congratulations);
				grid.appendChild(tryAgainButton);
			}
		}).catch(err => {
			getPokemonError.style.display = "block";
			grid.classList.replace("pt-3", "pt-2");
			getPokemonError.innerHTML = err;
			pokemonNameInput.value = "";
			return Promise.reject(err);
		})
}

function LoginPage() {
	window.open("index.html", "_self");
}

function tryAgain() {
	window.location.reload();
}
function getBgColor(answer) {
	let greenBg = "bg-my-green";
	let yellowBg = "bg-my-yellow";
	let redBg = "bg-my-light-red";
	let underBg = "bg-my-under";
	let overBg = "bg-my-over";
	switch (answer) {
		case "right":
			return greenBg
		case "wrong":
			return redBg
		case "wrongPlace":
			return yellowBg
		case "under":
			return underBg
		case "over":
			return overBg
	}
}

function PokemonWikiPage() {
	window.open("SilverFinances.html?Auth=" + encodeURIComponent(token), "_self");
}
