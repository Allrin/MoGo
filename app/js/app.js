// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import Splide, { SLIDE } from '@splidejs/splide';
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

  // new Splide(".promo-slider", {
  //   type: "loop",
  //   gap: "40px",
  //   classes: {
  //     arrow: "splide__arrow promo-slider__arrow",
  //   },
  //   pagination: true,
  //   arrows: false,
  //   // breakpoints: {
  //   //   560: {
  //   //     arrows: false,
  //   //     pagination: true,
  //   //     classes: {
  //   //       pagination: 'splide__pagination promo-slider__pagination',
  //   //     },
        
  //   //   },
  //   // }
  // }).mount();

  new Splide(".review-slider", {
    type: "loop",
    gap: "40px",
    classes: {
      arrow: "splide__arrow review-slider__arrow",
    },
    pagination: false,
    breakpoints: {
      560: {
        arrows: false,
        pagination: true,
        classes: {
          pagination: 'splide__pagination review-slider__pagination',
        },
        
      },
    }
  }).mount();

  var acc = document.getElementsByClassName("accordion__btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accordion__btn_active");
    this.classList.toggle("active");

    var accordion__descript = this.nextElementSibling;
    if (accordion__descript.style.display === "block") {
      accordion__descript.style.display = "none";
    } else {
      accordion__descript.style.display = "block";
    }
  });
}


 new Splide(".autor-slider", {
  type: "loop",
  gap: "40px",
  classes: {
    arrow: "splide__arrow autor-slider__arrow",
  },
  pagination: false,
  breakpoints: {
    560: {
      arrows: false,
      pagination: true,
      classes: {
        pagination: 'splide__pagination autor-slider__pagination',
      },
      
    },
  }
}).mount();

//Promo slider
const promoSlides = document.querySelectorAll('[data-slide-title]');

let slideTitles = [];
console.log(promoSlides);
promoSlides.forEach(function(slide) {
  slideTitles.push(slide.dataset.slideTitle)
})

const ptomoSlider = new Splide(".promo__slider", {
  arrows: false,
  drag: false,
  autoplay: true,
  rewind     : true,
  rewindSpeed: 4000,
  speed: 4000,
  classes: {
    pagination: 'splide__pagination promo__pagination',
  },
});


ptomoSlider.on( 'pagination:mounted', function ( data ) {
  // You can add your class to the UL element
  data.list.classList.add( 'splide__pagination--custom' );
  // `items` contains all dot items

    data.items.forEach( function ( item ) {
      // item.button.textContent = String( item.page + 1 );
      item.button.textContent = ` ${slideTitles[item.page]}`;
    } );

} );

ptomoSlider.mount();

 //mobile menu
  const headerBurger = document.querySelector(".header__burger");
  const headerNav = document.querySelector(".header__nav");

  headerBurger.addEventListener("click", function (event) {
    headerBurger.classList.toggle("burger_closed");
    headerNav.classList.toggle("header__nav_opened");

  });

})
