"use strict";

jQuery(document).ready(function(){
	
	if ((jQuery(window).width() < 768) && (jQuery('.review_slider').length > 0)) {
		
		new Swiper(".review_slider", {
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
			},
		});
	}
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


jQuery(document).ready(function(){

});