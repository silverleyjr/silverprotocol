//   Javascript file for Silver Finances Project
//
//   made by: Silverley

let pokemonNameInput = document.getElementById("pokemonName");
let detailsBtn = document.getElementById("DetailsBtn");
let detailsText = document.getElementById("DetailsText");
let statsText = document.getElementById("StatsText");
let pokemonImage = document.getElementById("PokemonImage");
let pokemonImageDiv = document.getElementById("ImageDiv");
let emptyDiv = document.getElementById("emptyDiv");
let token = "";
const urlParams = new URLSearchParams(window.location.search);
token = urlParams.get("Auth");

pokemonNameInput.addEventListener("keypress", (event) => {
	if (event.key == "Enter") detailsBtn.click();
});

function GetPokemonDetails() {
	pokemonName = pokemonNameInput.value;

	//const uri = ("https://socorro-postabdominal-nongeologically.ngrok-free.dev/account/new");
	//const options = {
	//	method: "POST",
	//	headers: {
	//		"Name": newUsername,
	//		"Password": newPassword,
	//		"ngrok-skip-browser-warning": "lala"
	//	}
	//};

	// Use the URLSearchParams API to easily read the value
	//
	//const token = urlParams.get("Auth");

	const uri = ("https://socorro-postabdominal-nongeologically.ngrok-free.dev/pokemon/stats");
	//const uri = ("https://pokeapi.co/api/v2/pokemon/" + pokemonName);
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
			return response.json();
		}).then(json => {
			console.log(json)
			let pokemonName = "Name: " + JSON.stringify(json.Name).substring(1, JSON.stringify(json.Name).length - 1)
			let pokemonId = "Id: " + JSON.stringify(json.Id)
			let pokemonHeight = "Height: " + JSON.stringify(json.Height)
			let pokemonWeight = "Weight: " + JSON.stringify(json.Weight)

			let pokemonStat1 = "hp: " + JSON.stringify(json.Stats[0])
			let pokemonStat2 = "attack: " + JSON.stringify(json.Stats[1])
			let pokemonStat3 = "defense: " + JSON.stringify(json.Stats[2])
			let pokemonStat4 = "special-attack: " + JSON.stringify(json.Stats[3])
			let pokemonStat5 = "special-defense: " + JSON.stringify(json.Stats[4])
			let pokemonStat6 = "speed: " + JSON.stringify(json.Stats[5])
			
			pokemonImage.src = JSON.stringify(json.Sprite).substring(1, JSON.stringify(json.Sprite).length - 1)
			pokemonImageDiv.style.display = "block";
			emptyDiv.style.display = "block";

			let pokemonType1 = JSON.stringify(json.Types[0])
			let pokemonType2 = ""

			if (json.Types.length > 1) {
				pokemonType2 = ", " + JSON.stringify(json.Types[1])
			}
			const pokemonDetails = ('<h2 class="text-center">Detalhes</h2>' + pokemonName + "<br>" + pokemonId + "<br>" + pokemonHeight + "<br>" + pokemonWeight + "<br>Types: " + pokemonType1 + pokemonType2);
			const pokemonStats = ('<h2 class="text-center">Stats</h2>' + pokemonStat1 + "<br>" + pokemonStat2 + "<br>" + pokemonStat3 + "<br>" + pokemonStat4 + "<br>" + pokemonStat5 + "<br>" + pokemonStat6 + "<br>");

			detailsText.innerHTML = pokemonDetails;
			statsText.innerHTML = pokemonStats;
			pokemonNameInput.value = "";
			detailsText.style.display = "block";
			statsText.style.display = "inline-block";
		})
}

function LoginPage() {
	window.open("index.html", "_self");
}

function GuessPokemonPage() {
	window.open("guessPokemon.html?Auth=" + encodeURIComponent(token), "_self");
	//window.open("SilverFinances.html?Auth=" + encodeURIComponent(authorization), "_self");
}
