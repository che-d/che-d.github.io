$(document).ready(function($) {
	if (jQuery.browser.mobile === false) {
		$('.header-nav__wrap').addClass('animated fadeInDown');
		$('.header-content-description').addClass('animated fadeInLeft');
		$('.header-content__video-wrap').addClass('animated fadeInRight');

		$(window).scroll(function(){
			let winScrollTop = $(this).scrollTop();
			let targetPos = $('.service').offset().top;
			let winHeight = $(window).height();
			let scrollToElem = targetPos - winHeight;
			if(winScrollTop > scrollToElem){
			$('.service-description').addClass('animated fadeInLeft delay1');
			$('.service__button').addClass('animated fadeInLeft delay1');
			$('.service-item').addClass('animated fadeInRight delay1');
		  }
		});

		$('.product-description, .product-nav').hide()
		$(window).scroll(function(){
			let winScrollTop = $(this).scrollTop();
			let targetPos = $('.product').offset().top;
			let winHeight = $(window).height();
			let scrollToElem = targetPos - winHeight;
			if(winScrollTop > scrollToElem){
			$('.product-description').fadeIn(800);
			$('.product-nav').fadeIn(900);
		  }
		});

		$(window).scroll(function(){
			let winScrollTop = $(this).scrollTop();
			let targetPos = $('.team').offset().top;
			let winHeight = $(window).height();
			let scrollToElem = targetPos - winHeight;
			if(winScrollTop > scrollToElem){
			$('.team-description').addClass('animated fadeInLeft delay1');
			$('.profiles-img__wrap_active').addClass('animated fadeInLeft delay2');
			$('.profiles-description__wrap').addClass('animated fadeInRight delay2');
		  }
		});
		$(window).scroll(function(){
			let winScrollTop = $(this).scrollTop();
			let targetPos = $('.subscribe').offset().top;
			let winHeight = $(window).height();
			let scrollToElem = targetPos - winHeight;
			if(winScrollTop > scrollToElem){
			$('.subscribe-description').addClass('animated fadeInLeft delay1');
			$('.subscribe-form').addClass('animated fadeInRight delay2');
		  }
		});
		$(window).scroll(function(){
			let winScrollTop = $(this).scrollTop();
			let targetPos = $('.contact').offset().top;
			let winHeight = $(window).height();
			let scrollToElem = targetPos - winHeight;
			if(winScrollTop > scrollToElem){
			$('.contact-description__wrap').addClass('animated fadeInLeft delay1');
			$('.contact-form__wrap').addClass('animated fadeInLeft delay2');
			$('.contact-information__wrap_desktop').addClass('animated fadeInRight delay2');
		  }
		});
	}
	$('.profiles-description__img').click(function() {
		$('.profiles-img_active').css('opacity', 0).animate({opacity:1},600);
		$(this).css('opacity', 0).animate({opacity:1},600);
		$('.profiles-description_active').css('opacity', 0).animate({opacity:1},600);
		$(this).css('opacity', 0).animate({opacity:1},600);
		$('.profiles-description__text_active').css('opacity', 0).animate({opacity:1},600);
		$(this).css('opacity', 0).animate({opacity:1},600);
		$('.profiles-description__list_active').css('opacity', 0).animate({opacity:1},600);
		$(this).css('opacity', 0).animate({opacity:1},600);
	});
});