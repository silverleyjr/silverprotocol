//   Javascript file for Silver Finances Project
//
//   made by: Silverley


const invalidUser = "Usuario ou senha invalidos";
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let loginBtn = document.getElementById("entrar")

usernameInput.addEventListener("keypress", (event) => {
	if (event.key == "Enter") loginBtn.click();
});

passwordInput.addEventListener("keypress", (event) => {
	if (event.key == "Enter") loginBtn.click();
});

function Login() {
	password = passwordInput.value
	username = usernameInput.value
	const errorMessage = document.getElementById("errorLogin");
	errorMessage.style.display = "none";
	const uri = "https://socorro-postabdominal-nongeologically.ngrok-free.dev/account/login";
	const options = {
		method: "GET",
		headers: {
			"Name": username,
			"Password": password,
			"ngrok-skip-browser-warning": "lala"
		}
	};

	fetch(uri, options)
		.then(response => {
			return response.json();
		}).then(json => {
			const authorizationWithMarks = JSON.stringify(json.Authorization)
			let authorization = ""
			if (authorizationWithMarks != "") {
				authorization = authorizationWithMarks.substring(1, authorizationWithMarks.length - 1)
				console.log(authorizationWithMarks)
				console.log(authorization)
			}
			window.open("SilverFinances.html?Auth=" + encodeURIComponent(authorization), "_self");
			errorMessage.innerHTML = invalidUser;
			errorMessage.style.display = "block";
		})
		.catch(err => {
			errorMessage.innerHTML = err;
			errorMessage.style.display = "block";
		})
}

function LoginPage() {
	window.open("index.html", "_self");
}

function NewUserPage() {
	window.open("newUser.html", "_self");
}
