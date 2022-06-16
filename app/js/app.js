// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import Splide from '@splidejs/splide';
document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	console.log("Helloy world");
// header
let header = document.querySelector(".header");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 1) {
    header.classList.add("header_has-bg");
  } else {
    header.classList.remove("header_has-bg");
  }
});
  AOS.init();

 new Splide( '.splide' ).mount();
})
