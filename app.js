const hamburgerContainer = document.querySelector('#header__main-nav');
const hamburger = document.querySelector('.header__main--hamburger');
const links = document.querySelectorAll('.header__main-nav--links li');

const $form = document.getElementById('form'); 
const $buttonMalito = document.getElementById('trucazo'); 
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');


hamburger.addEventListener("click", () => {
	hamburgerContainer.classList.toggle("clicked");
	links.forEach(link => {
		link.classList.toggle("fade");
	})
});


$form.addEventListener('submit', handleSubmit )

function handleSubmit(e) {
	e.preventDefault(); 
	ckeckValue(emailInput.value);
}

function ckeckValue(input) {
	if(input === '') {
		sendMsg("The mail is required");
	} else {
		const date = {
			name : nameInput.value, 
			email : emailInput.value,
			subject : subjectInput.value,
			message : messageInput.value 
		}
	
		$buttonMalito.setAttribute('href', `mailto:zavalavinagreelide@gmail.com?subject=${date.name} ${date.subject}=&body=${date.message}`);
		$buttonMalito.click();

		sendMsg("The message was send")

		cleanValue();
	}
}

function sendMsg(msj) {
	const small = document.querySelector('.small');
	small.style.backgroundColor = "#017f96";
	small.innerText = msj;
	setTimeout(() => {
		small.innerText = '';
	}, 3000);
}

function cleanValue() {
	nameInput.value = '';
	emailInput.value = '';
	subjectInput.value = '';
	messageInput.value = '';
}				
