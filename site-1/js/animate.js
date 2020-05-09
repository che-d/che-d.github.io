$(document).ready(function($) {
	if (jQuery.browser.mobile === false) {
		$('.header .container').addClass('animated fadeInDown');
		$('.header-cont .col-xl-6').addClass('animated fadeInLeft');
		$('.header-cont .col-xl-5').addClass('animated fadeInRight');

		$(window).scroll(function(){
			let winScrollTop = $(this).scrollTop();
			let targetPos = $('.services').offset().top;
			let winHeight = $(window).height();
			let scrollToElem = targetPos - winHeight;
			if(winScrollTop > scrollToElem){
			$('.services .col-lg-5').addClass('animated fadeInLeft delay1');
			$('.services .col-lg-3').addClass('animated fadeInRight delay1');
		  }
		});

		$('.product .col-xl-5, .product .col-lg-12').hide()
		$(window).scroll(function(){
			let winScrollTop = $(this).scrollTop();
			let targetPos = $('.product').offset().top;
			let winHeight = $(window).height();
			let scrollToElem = targetPos - winHeight;
			if(winScrollTop > scrollToElem){
			$('.product .col-xl-5').fadeIn(1000);
			$('.product .col-lg-12').fadeIn(2000);
		  }
		});

		$(window).scroll(function(){
			let winScrollTop = $(this).scrollTop();
			let targetPos = $('.team').offset().top;
			let winHeight = $(window).height();
			let scrollToElem = targetPos - winHeight;
			if(winScrollTop > scrollToElem){
			$('.team .col-xl-5').addClass('animated fadeInLeft delay1');
			$('.team #big_img').addClass('animated fadeInLeft delay2');
			$('.team #description_profile').addClass('animated fadeInRight delay2');
		  }
		});
		$(window).scroll(function(){
			let winScrollTop = $(this).scrollTop();
			let targetPos = $('.subscribe').offset().top;
			let winHeight = $(window).height();
			let scrollToElem = targetPos - winHeight;
			if(winScrollTop > scrollToElem){
			$('.subscribe .col-xl-12').addClass('animated fadeInLeft delay1');
			$('.subscribe .col-sm-12').addClass('animated fadeInRight delay2');
		  }
		});
		$(window).scroll(function(){
			let winScrollTop = $(this).scrollTop();
			let targetPos = $('.contact').offset().top;
			let winHeight = $(window).height();
			let scrollToElem = targetPos - winHeight;
			if(winScrollTop > scrollToElem){
			$('.contact .col-xl-7').addClass('animated fadeInLeft delay1');
			$('.contact .col-md-7').addClass('animated fadeInLeft delay2');
			$('.contact .contact_info').addClass('animated fadeInRight delay2');
		  }
		});
	}
	$('#small_img img').click(function() {
		$('#big_img img').css('opacity', 0).animate({opacity:1},600);
		$(this).css('opacity', 0).animate({opacity:1},600);
		$('#profile').css('opacity', 0).animate({opacity:1},600);
		$(this).css('opacity', 0).animate({opacity:1},600);
		$('#profile_text').css('opacity', 0).animate({opacity:1},600);
		$(this).css('opacity', 0).animate({opacity:1},600);
		$('#profile_link').css('opacity', 0).animate({opacity:1},600);
		$(this).css('opacity', 0).animate({opacity:1},600);
	});
});