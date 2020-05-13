$(document).ready(function($) {
	if (jQuery.browser.mobile === false) {
		$('.header-nav__wrap').addClass('animated fadeInDown');
		$('.header-content__description-wrap').addClass('animated fadeInLeft');
		$('.header-content__video-wrap').addClass('animated fadeInRight');

		$(window).scroll(function(){
			let winScrollTop = $(this).scrollTop();
			let targetPos = $('.services').offset().top;
			let winHeight = $(window).height();
			let scrollToElem = targetPos - winHeight;
			if(winScrollTop > scrollToElem){
			$('.services__description-wrap').addClass('animated fadeInLeft delay1');
			$('.service-item').addClass('animated fadeInRight delay1');
		  }
		});

		$('.product__description-wrap, .product__nav').hide()
		$(window).scroll(function(){
			let winScrollTop = $(this).scrollTop();
			let targetPos = $('.product').offset().top;
			let winHeight = $(window).height();
			let scrollToElem = targetPos - winHeight;
			if(winScrollTop > scrollToElem){
			$('.product__description-wrap').fadeIn(1000);
			$('.product__nav').fadeIn(2000);
		  }
		});

		$(window).scroll(function(){
			let winScrollTop = $(this).scrollTop();
			let targetPos = $('.team').offset().top;
			let winHeight = $(window).height();
			let scrollToElem = targetPos - winHeight;
			if(winScrollTop > scrollToElem){
			$('.team__description-wrap').addClass('animated fadeInLeft delay1');
			$('.profiles__img-wrap_active').addClass('animated fadeInLeft delay2');
			$('.profiles__description-wrap').addClass('animated fadeInRight delay2');
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
	$('.profiles__description img').click(function() {
		$('.profiles__img-wrap_active img').css('opacity', 0).animate({opacity:1},600);
		$(this).css('opacity', 0).animate({opacity:1},600);
		$('.profiles__description_active').css('opacity', 0).animate({opacity:1},600);
		$(this).css('opacity', 0).animate({opacity:1},600);
		$('.profiles__text_active').css('opacity', 0).animate({opacity:1},600);
		$(this).css('opacity', 0).animate({opacity:1},600);
		$('.profiles__list_active').css('opacity', 0).animate({opacity:1},600);
		$(this).css('opacity', 0).animate({opacity:1},600);
	});
});