let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.nav');
let search = document.querySelector('.search-form');
let searchbar = document.querySelector('.search-bar');

menubar.onclick=() => {
	menubar.classList.toggle('fa-times')
	mynav.classList.toggle('active')
}
searchbar.onclick=() => {
	mynav.classList.toggle('active')

	
}