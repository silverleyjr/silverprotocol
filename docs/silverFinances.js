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
	const urlParams = new URLSearchParams(window.location.search);
	const token = urlParams.get("userId");
	console.log(retrievedUserId); // Output: 123

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
			//const pokemonName = "Name: " + JSON.stringify(json.name)
			//const pokemonId = "Id: " + JSON.stringify(json.id)
			//const pokemonHeight = "Height: " + JSON.stringify(json.height)
			//const pokemonWeight = "Weight: " + JSON.stringify(json.weight)
			//const pokemonType1 = JSON.stringify(json.types[0].type.name)
			//const pokemonStat1 = "hp: " + JSON.stringify(json.stats[0].base_stat)
			//const pokemonStat2 = "attack: " + JSON.stringify(json.stats[1].base_stat)
			//const pokemonStat3 = "defense: " + JSON.stringify(json.stats[2].base_stat)
			//const pokemonStat4 = "special-attack: " + JSON.stringify(json.stats[3].base_stat)
			//const pokemonStat5 = "special-defense: " + JSON.stringify(json.stats[4].base_stat)
			//const pokemonStat6 = "speed: " + JSON.stringify(json.stats[5].base_stat)
			//const pokemonSpriteUrl = JSON.stringify(json.sprites.front_default)

			//let cleanPokemonSpriteUrl = pokemonSpriteUrl.substring(1, pokemonSpriteUrl.length - 1)
			//pokemonImage.src = cleanPokemonSpriteUrl
			//pokemonImageDiv.style.display = "block";
			//emptyDiv.style.display = "block";

			//var pokemonType2 = ""
			//if (json.types.length > 1) {
			//	var pokemonType2 = ", " + JSON.stringify(json.types[1].type.name)
			//}
			//const pokemonDetails = ('<h2 class="text-center">Detalhes</h2>' + pokemonName + "<br>" + pokemonId + "<br>" + pokemonHeight + "<br>" + pokemonWeight + "<br>Types: " + pokemonType1 + pokemonType2);
			//const pokemonStats = ('<h2 class="text-center">Stats</h2>' + pokemonStat1 + "<br>" + pokemonStat2 + "<br>" + pokemonStat3 + "<br>" + pokemonStat4 + "<br>" + pokemonStat5 + "<br>" + pokemonStat6 + "<br>");

			//detailsText.innerHTML = pokemonDetails;
			//statsText.innerHTML = pokemonStats;
			//pokemonNameInput.value = "";
			//detailsText.style.display = "block";
			//statsText.style.display = "inline-block";
		})
}

function LoginPage() {
	window.open("index.html", "_self");
}

function NewUserPage() {
	window.open("newUser.html", "_self");
}
