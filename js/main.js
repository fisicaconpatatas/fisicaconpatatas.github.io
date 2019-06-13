/* =================================
------------------------------------
	EndGam - Gaming Magazine Template
	Version: 1.0
 ------------------------------------
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(0).fadeOut("slow");

});

(function($) {


	  var z, i, elmnt, file, xhttp;
	  /* Loop through a collection of all HTML elements: */
	  z = document.getElementsByTagName("div");
	  for (i = 0; i < z.length; i++) {
	    elmnt = z[i];
	    /*search for elements with a certain atrribute:*/
	    file = elmnt.getAttribute("w3-include-html");
	    if (file) {
	      /* Make an HTTP request using the attribute value as the file name: */
	      xhttp = new XMLHttpRequest();
	      xhttp.onreadystatechange = function() {
	        if (this.readyState == 4) {
	          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
	          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
	          /* Remove the attribute, and call this function once more: */
	          elmnt.removeAttribute("w3-include-html");
	        }
	      } 
	      xhttp.open("GET", file, true);
	      xhttp.send();
	      /* Exit the function: */
	      return;
	    }
	  }
	

	/*------------------
		Navigation
	--------------------*/
	$('.primary-menu').slicknav({
		appendTo:'.header-warp',
		closedSymbol: '<i class="fa fa-angle-down"></i>',
		openedSymbol: '<i class="fa fa-angle-up"></i>'
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});



	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		navText: ['<img src="img/icons/solid-left-arrow.png">', '<img src="img/icons/solid-right-arrow.png">'],
		mouseDrag: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		//autoplay: true,
		autoplayTimeout: 10000,
	});

	var dot = $('.hero-slider .owl-dot');
	dot.each(function() {
		var index = $(this).index() + 1;
		if(index < 10){
			$(this).html('0').append(index + '.');
		}else{
			$(this).html(index + '.');
		}
	});



	/*------------------
		Video Popup
	--------------------*/
	$('.video-popup').magnificPopup({
  		type: 'iframe'
	});

	$('#stickySidebar').stickySidebar({
	    topSpacing: 60,
	    bottomSpacing: 60
	});




})(jQuery);
