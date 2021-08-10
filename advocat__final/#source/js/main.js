$(document).ready(function() {
	// Scroll button to top
	$(window).scroll(function() {
		if ($(this).scrollTop() !=0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('html, body').animate({
			scrollTop:0
		}, 1000);
	});
	// Smooth scroll
	$('.header').find('a[href^="#"]').click(function() {
			let target = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 500);
			return false;
	});
	// Scroll button to back
	$.fn.scrollBottom = function() { 
		return $(document).height() - this.scrollTop() - this.height(); 
	};
	$(window).scroll(function() {
	if ($(this).scrollBottom() ==0) {
			$('#toBack').fadeIn();
		} else {
			$('#toBack').fadeOut();
		}
	});
	$('.header__button').click(
		function() {
			$(this).toggleClass("open");
			$(this).parents('.header').children('.container').children('.header__bottom').slideToggle(500);
			
		});
	$('.header__button').hover(
		function() {
			$(this).parent('.header__button_wrap').toggleClass('header__button_hover');
		});
	$.fn.equivalent = function (){
		var $articleHeight = $(this),
			maxH	= $articleHeight.eq(0).height(); 
		$articleHeight.each(function(){
			maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
		});
		$articleHeight.height(maxH); 
	}
	$('.carousel-inner').equivalent();
	var $caruselcarouselinner = $('.carousel-inner').height();
	$('.carousel-inner').height($caruselcarouselinner+40);
	$('.carousel-item').height($caruselcarouselinner+40);

	// $('.carousel').height()+40
	// $('.review__wrap').height()+40
	// $('.review__text').equivalent();
	if (document.documentElement.clientWidth >= 991) {
		$('.services__item_s').equivalent();
	// Animation
		$('.general-screen__left').addClass('animate__animated animate__fadeIn');
		$('.general-screen__text_wrap').addClass('animate__animated animate__fadeIn delay4');
		$('.general-screen__button').addClass('animate__animated animate__flipInX delay8');
		$(window).scroll(function(){
				let winScrollTop = $(this).scrollTop();
				let targetPos = $('.about__card_s_wrap').offset().top;
				let winHeight = $(window).height();
				let scrollToElem = targetPos - winHeight;
				if(winScrollTop > scrollToElem){
				$('.about__card_s:even').addClass('animate__animated animate__backInLeft');
				$('.about__card_s:odd').addClass('animate__animated animate__backInRight');
			}
		});
		$(window).scroll(function(){
				let winScrollTop = $(this).scrollTop();
				let targetPos = $('.about__card_b_wrap').offset().top;
				let winHeight = $(window).height();
				let scrollToElem = targetPos - winHeight;
				if(winScrollTop > scrollToElem){
				$('.about__card_b:even').addClass('animate__animated animate__backInLeft');
				$('.about__card_b:odd').addClass('animate__animated animate__backInRight');
			}
		});
		$(window).scroll(function(){
				let winScrollTop = $(this).scrollTop();
				let targetPos = $('.services__wrap').offset().top;
				let winHeight = $(window).height();
				let scrollToElem = targetPos - winHeight;
				if(winScrollTop > scrollToElem){
				$('.services__item_s:eq(0)').addClass('animate__animated animate__backInLeft');
				$('.services__item_s:eq(1)').addClass('animate__animated animate__backInLeft delay4');
				$('.services__item_s:eq(2)').addClass('animate__animated animate__backInLeft delay8');
				$('.services__item_large').addClass('animate__animated flipInX delay12');
			}
		});
		$(window).scroll(function(){
			let winScrollTop = $(this).scrollTop();
			let targetPos = $('.first-call__wrap').offset().top;
			let winHeight = $(window).height();
			let scrollToElem = targetPos - winHeight;
			if(winScrollTop > scrollToElem){
				$('.first-call__wrap .col-md-4').addClass('animate__animated flipInX');
			}
		});
	};
	$(window).scroll(function() {
		if ($(this).scrollTop() !=0) {
			$('.header').addClass('header__background');
		} else {
			$('.header').removeClass('header__background');
		}
	});
	if (document.documentElement.clientWidth <= 991) {
		$('.services__item_large br').remove();
	};
	$('#review__carousel').carousel({
		interva: 8000,
		pause: "hover"
		});
});