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

	var swiper = new Swiper(".difference_slider", {
		allowTouchMove: false,
		loop:true,
		navigation: {
		  nextEl: ".difference_next",
		  prevEl: ".difference_prev",
		},
	  });
});

let getWidthBtn = jQuery('.slider-button').outerWidth() / 2;
jQuery(".slider").on("input change", (e)=>{
	const sliderPos = e.target.value;
	// Update the width of the foreground image
	jQuery(e.target).parents('.difference_blk').find('.foreground-img').css('width', `${sliderPos}%`)
	// Update the position of the slider button
	jQuery(e.target).parents('.difference_blk').find('.slider-button').css('left', `calc(${sliderPos}% - ${getWidthBtn}px)`);
	
	setTimeout(() => {
		
		console.log();
	}, 2000);
});