
let pokemonNameInput = document.getElementById("pokemonName");
let guessButton = document.getElementById("guessButton");
let token = "";
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
			let responseCode = JSON.stringify(responseJson.Code);
			console.log("response code");
			console.log(responseCode);
			return responseJson;
		}).then(json => {
			console.log("json")
			console.log(json)
			let pokemonContainer = document.getElementById("pokemonContainer");

			let pokemonRowElement = document.createElement("div"); //
			let imgDivElement = document.createElement("div"); //
			let imgElement = document.createElement("img"); //
			let idElement = document.createElement("div"); //
			let heightElement = document.createElement("div"); //
			let weightElement = document.createElement("div"); //
			let type1Element = document.createElement("div"); //
			let type2Element = document.createElement("div"); //
			let hpStatElement = document.createElement("div"); //
			let attackStatElement = document.createElement("div"); //
			let defenseStatElement = document.createElement("div"); //
			let spAttackStatElement = document.createElement("div"); //
			let spDefenseStatElement = document.createElement("div"); //
			let speedStatElement = document.createElement("div"); //

			let classExample = "col-2 col-lg-1 p-2 w-8 border border-3 border-my-dark-red rounded align-items-center"
			//let greenBg = " bg-my-green";
			//let yellowBg = " bg-my-yellow";
			//let redBg = " bg-my-light-red";
			pokemonRowElement.className = "row mt-2 text-center";

			imgDivElement.className = classExample + " bg-my-light";
			idElement.className = classExample;
			heightElement.className = classExample;
			weightElement.className = classExample;
			type1Element.className = classExample;
			type2Element.className = classExample;
			hpStatElement.className = classExample;
			attackStatElement.className = classExample;
			defenseStatElement.className = classExample;
			spAttackStatElement.className = classExample;
			spDefenseStatElement.className = classExample;
			speedStatElement.className = classExample;

			getBgColor(json.Answers[0], idElement)
			getBgColor(json.Answers[1], heightElement)
			getBgColor(json.Answers[2], weightElement)
			getBgColor(json.Answers[3], type1Element)
			getBgColor(json.Answers[4], type2Element)
			getBgColor(json.Answers[5], hpStatElement)
			getBgColor(json.Answers[6], attackStatElement)
			getBgColor(json.Answers[7], defenseStatElement)
			getBgColor(json.Answers[8], spAttackStatElement)
			getBgColor(json.Answers[9], spDefenseStatElement)
			getBgColor(json.Answers[10], speedStatElement)

			 //= JSON.stringify(json.Types[0]).substring(1, JSON.stringify(json.Types[0]).length - 1)

			id = parseInt(JSON.stringify(json.Id));
			height = parseInt(JSON.stringify(json.Height));
			weight = parseInt(JSON.stringify(json.Weight));

			type1  = JSON.stringify(json.Types[0]).substring(1, JSON.stringify(json.Types[0]).length - 1)
			type2 = "None"
			if (json.Types.length > 1) {
				type2  = JSON.stringify(json.Types[1]).substring(1, JSON.stringify(json.Types[1]).length - 1)
			}

			hpStat = parseInt(JSON.stringify(json.Stats[0]));
			attackStat = parseInt(JSON.stringify(json.Stats[1]));
			defenseStat = parseInt(JSON.stringify(json.Stats[2]));
			spAttackStat = parseInt(JSON.stringify(json.Stats[3]));
			spDefenseStat = parseInt(JSON.stringify(json.Stats[4]));
			speedStat = parseInt(JSON.stringify(json.Stats[5]));

			idElement.innerHTML = "Id:<br>" + id.toString()
			heightElement.innerHTML = "Height:<br>" + height.toString()
			weightElement.innerHTML = "Weight:<br>" + weight.toString()
			type1Element.innerHTML = "Type 1:<br>" + type1
			type2Element.innerHTML = "Type 2:<br>" + type2
			hpStatElement.innerHTML = "HP:<br>" + hpStat.toString()
			attackStatElement.innerHTML = "Attack:<br>" + attackStat.toString()
			defenseStatElement.innerHTML = "Defense:<br>" + defenseStat.toString()
			spAttackStatElement.innerHTML = "Sp. attack:<br>" + spAttackStat.toString()
			spDefenseStatElement.innerHTML = "Sp. defense:<br>" + spDefenseStat.toString()
			speedStatElement.innerHTML = "Speed:<br>" + speedStat.toString()

//			let pokemonType1 = JSON.stringify(json.Types[0])
//			pokemonImage.src = JSON.stringify(json.Sprite).substring(1, JSON.stringify(json.Sprite).length - 1)
//			pokemonImageDiv.style.display = "block";
//			emptyDiv.style.display = "block";


			imgElement.src = JSON.stringify(json.Sprite).substring(1, JSON.stringify(json.Sprite).length - 1); //

			imgDivElement.appendChild(imgElement);

			pokemonRowElement.appendChild(imgDivElement);
			pokemonRowElement.appendChild(idElement);
			pokemonRowElement.appendChild(heightElement);
			pokemonRowElement.appendChild(weightElement);
			pokemonRowElement.appendChild(type1Element);
			pokemonRowElement.appendChild(type2Element);
			pokemonRowElement.appendChild(hpStatElement);
			pokemonRowElement.appendChild(attackStatElement);
			pokemonRowElement.appendChild(defenseStatElement);
			pokemonRowElement.appendChild(spAttackStatElement);
			pokemonRowElement.appendChild(spDefenseStatElement);
			pokemonRowElement.appendChild(speedStatElement);
			
			pokemonContainer.prepend(pokemonRowElement);

			pokemonNameInput.value = "";
		})
}

function LoginPage() {
	window.open("index.html", "_self");
}

function getBgColor(answer, element) {
	let greenBg = "bg-my-green";
	let yellowBg = "bg-my-yellow";
	let redBg = "bg-my-light-red";
	let underBg = "bg-my-under";
	let overBg = "bg-my-over";
	switch (answer) {
		case "right":
			element.classList.add(greenBg);
			break
		case "wrong":
			element.classList.add(redBg);
			break
		case "wrongPlace":
			element.classList.add(yellowBg);
			break
		case "under":
			element.classList.add(underBg);
			break
		case "over":
			element.classList.add(overBg);
			break
	}
	console.log(answer)
	console.log(element)
}

function pokemonWikiPage() {
	window.open("guessPokemon.html?Auth=" + encodeURIComponent(token), "_self");
}
