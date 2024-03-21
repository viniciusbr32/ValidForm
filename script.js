const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');
const email = document.getElementById('email');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	checkForm();
});

email.addEventListener('blur', () => {
	checkInputEmail();
});

username.addEventListener('blur', () => {
	checkInputUsername();
});

function checkInputUsername() {
	const usernameValue = username.value;
	if (usernameValue === '') {
		errorInput(username, 'preencha o Username');
	} else {
		const formItem = username.parentElement;
		formItem.className = 'form-content';
	}
}

function checkInputEmail() {
	const emailValue = email.value;
	if (emailValue === '') {
		errorInput(email, 'preencha seu email');
	} else {
		const formItem = email.parentElement;
		formItem.className = 'form-content';
	}
}

function checkInputPassword() {
	const passwordValue = password.value;

	if (passwordValue === '') {
		errorInput(password, 'preencha sua senha');
	} else if (passwordValue.length < 8) {
		errorInput(password, 'a senha precisa ter 8 caracteres');
	} else {
		const formItem = password.parentElement;
		formItem.className = 'form-content';
	}
}

function checkInputPasswordConfirmation() {
	const passwordValue = password.value;
	const confirmationPassword = passwordConfirmation.value;

	if (passwordValue === '') {
		errorInput(passwordConfirmation, 'preenchaa a senha de confirmação');
	} else if (passwordValue !== confirmationPassword) {
		errorInput(passwordConfirmation, 'as senhas Não são iguais');
	} else {
		const formItem = passwordConfirmation.parentElement;
		formItem.className = 'form-content';
	}
}

function checkForm() {
	checkInputUsername();
	checkInputEmail();
	checkInputPassword();
	checkInputPasswordConfirmation();

	const formItems = form.querySelectorAll('.form-content');
	const isValid = [...formItems].every((item) => {
		return item.className === 'form-content';
	});

	if (isValid) {
		Toastify({
			text: 'Cdastrado Com sucesso',
			duration: 3000,
			close: true,
			gravity: 'top', //
			position: 'right', //
			stopOnFocus: true, //
			style: {
				background: 'linear-gradient(to right, #96c93d, #96c93d)',
			},
			onClick: function () {}, // C
		}).showToast();
	}
}

function errorInput(input, message) {
	const formItem = input.parentElement;
	const textMessage = formItem.querySelector('p');

	textMessage.innerText = message;
	formItem.className = 'form-content error';
}
