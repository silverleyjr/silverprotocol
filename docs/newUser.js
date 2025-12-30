//   Javascript file for Silver Finances Project
//
//   made by: Silverley


const invalidUser = "Usuario invalido";
let newUsernameInput = document.getElementById("NewUserUsername");
let newPasswordInput = document.getElementById("NewUserPassword");
let newUserBtn = document.getElementById("NewUserBtn")

newUsernameInput.addEventListener("keypress", (event) => {
	if (event.key == "Enter") newUserBtn.click();
});

newPasswordInput.addEventListener("keypress", (event) => {
	if (event.key == "Enter") newUserBtn.click();
});

function NewUser() {
	newUsername = newUsernameInput.value;
	newPassword = newPasswordInput.value;
	const errorMessage = document.getElementById("errorLogin");
	errorMessage.style.display = "none";

	const uri = ("http://localhost:8082/account/new/?username=" + newUsername + "&password=" + newPassword + "&authorization=SilverleyFodao");
	const options = {
		method: "POST",
		headers: {
			"Authorization": "SilverleyFodao",
			"Username": "Silverley"
		}
	};

	fetch(uri, options)
		.then(response => {
			return response.json();
		}).then(json => {
			const responseCode = JSON.stringify(json.Code)
			if (responseCode == "200") {
				window.open("loginPage.html", "_self");
			} else {
				errorMessage.innerHTML = invalidUser;
			}
		})
	errorMessage.style.display = "block";
}


function LoginPage() {
	window.open("index.html", "_self");
}
