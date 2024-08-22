"use strict";

jQuery(document).ready(function(){
	
	const isMobile = window.matchMedia("(min-width: 768px)").matches;

	if (isMobile) {
		review_slider();
	};

	const review_slider = new Swiper(".review_slider", {
		breakpoints: {
			0: {
			  	slidesPerView: 1,
			  	spaceBetween: 15,
			},
		},
    });
});

function bluesticky()
{
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

jQuery(window).on('load' ,function() {
	bluesticky();
});
jQuery(window).resize(function() {
	bluesticky();
});