//   Javascript file for Silver Finances Project
//
//   made by: Silverley


const invalidUser = "Usuario ou senha invalidos";
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let loginBtn = document.getElementById("entrar")
var user = usernameInput.value

usernameInput.addEventListener("keypress", (event) => {
	if (event.key == "Enter") loginBtn.click();
});

passwordInput.addEventListener("keypress", (event) => {
	if (event.key == "Enter") loginBtn.click();
});

function Login() {
	password = passwordInput.value
	const errorMessage = document.getElementById("errorLogin");
	errorMessage.style.display = "none";
	const uri = "https://socorro-postabdominal-nongeologically.ngrok-free.dev/account/password";
	const options = {
		method: "GET",
		headers: {
			"Authorization": "SilverleyFodao",
			"Username": document.getElementById("username").value,
		}
	};

	fetch(uri, options)
		.then(response => {
			return response.json();
		}).then(json => {
			const correctPswd = JSON.stringify(json.Password)
			if (correctPswd == '"' + password + '"') {
				window.open("SilverFinances.html", "_self");
			} else {
				errorMessage.innerHTML = invalidUser;
			}
		})
	errorMessage.style.display = "block";
}

function LoginPage() {
	window.open("index.html", "_self");
}

function NewUserPage() {
	window.open("newUser.html", "_self");
}
