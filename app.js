const hamburgerContainer = document.querySelector('#header__main-nav');
const hamburger = document.querySelector('.header__main--hamburger');
const links = document.querySelectorAll('.header__main-nav--links li');
const form = document.querySelector('form'); 

const nameInput = document.getElementById('name').value;
const emailInput = document.getElementById('email').value;
const subjectInput = document.getElementById('subject').value;
const messageInput = document.getElementById('message').value;


hamburger.addEventListener("click", () => {
	hamburgerContainer.classList.toggle("clicked");
	links.forEach(link => {
		link.classList.toggle("fade");
	})
});


form.addEventListener('submit', e => {
	e.preventDefault(); 
	console.log(`Mi nombre es ${nameInput} - correo ${emailInput} - asunto ${subjectInput} - Mi mensaje ${messageInput}`);
});
