const hamburgerContainer = document.querySelector('#header__main-nav');
const hamburger = document.querySelector('.header__main--hamburger');
const links = document.querySelectorAll('.header__main-nav--links li');


hamburger.addEventListener("click", () => {
	hamburgerContainer.classList.toggle("clicked")
	console.log('hola')
});

