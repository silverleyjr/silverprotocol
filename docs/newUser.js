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

	const uri = ("https://socorro-postabdominal-nongeologically.ngrok-free.dev/account/new");
	const options = {
		method: "POST",
		headers: {
			"Name": newUsername,
			"Password": newPassword,
			"ngrok-skip-browser-warning": "lala"
		}
	};

	fetch(uri, options)
		.then(response => {
			let responseJson = response.json();
			let responseCode = response.status;
			if (responseCode === 400) {
				throw "Usuario ou senha invalidos";
			}
			if (responseCode === 500) {
				throw "Um erro inesperado ocorreu";
			}
			return responseJson;
		}).then(json => {
			const responseCode = JSON.stringify(json.Code)
			if (responseCode == "200") {
				errorMessage.style.display = "none";
				window.open("index.html", "_self");
			}	
		}).catch(err => {
			errorMessage.style.display = "block";
			errorMessage.innerHTML = err;
			return Promise.reject(err);
		})
}


function LoginPage() {
	window.open("index.html", "_self");
}
