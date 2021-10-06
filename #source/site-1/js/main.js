$(document).ready(function() {
	$('.product__button[data-filter-1]').click(function (){
		if($(this).attr('data-filter-1')=='all') {
			if($(this).attr('data-val')=='off') {
				$('.product__button[data-filter-1]').attr('data-val','off');
				$(this).attr('data-val','on');
				$('.product__button[data-filter-1]').removeClass('product__button_active');
				$(this).addClass('product__button_active');
				$('.product__img_filter > div').slideUp(400);
				setTimeout(function() {
				$('.product__img_filter > div').slideDown(600);
				},400);
			}
		} else {
			if($(this).attr('data-val')=='off') {
				$('.product__button[data-filter-1]').attr('data-val','off');
				$(this).attr('data-val','on');
				$('.product__button[data-filter-1]').removeClass('product__button_active');
				$(this).addClass('product__button_active');
				$('.product__button[data-filter-1]').addClass('product__button');
				$('.product__img_filter > div').slideUp(400);
				let filter = $(this).attr('data-filter-1');
				setTimeout(function() {
					$('.product__img_filter > div[data-filter-1 = '+ filter +']').slideDown(600);
				},400);
			}
		}
	});
	$('.profiles-description__img').click(function() {
		let smallHref = $(this).attr('src');
		let bigHref = $('.profiles-img_active').attr('src');
		$('.profiles-img_active').attr('src', smallHref);
		$(this).attr('src',bigHref);
		let profiles__name_hide = $(this).siblings('.profiles-description__name-wrap').find('p').html();
		let profiles__name_active = $('.profiles-description__name_active').html();
		$('.profiles-description__name_active').html(profiles__name_hide);
		$(this).siblings('.profiles-description__name-wrap').find('p').html(profiles__name_active);
		let profiles__text_hide = $(this).siblings('.profiles-description__text-wrap').find('p').html();
		let profiles__text_active = $('.profiles-description__text_active').html();
		$('.profiles-description__text_active').html(profiles__text_hide);
		$(this).siblings('.profiles-description__text-wrap').find('p').html(profiles__text_active);
		let profiles__list_hide = $(this).siblings('.profiles-description__list').html();
		let profiles__list_active = $('.profiles-description__list_active').html();
		$('.profiles-description__list_active').html(profiles__list_hide);
		$(this).siblings('.profiles-description__list').html(profiles__list_active);
		return false;
	});
	if (document.documentElement.clientWidth >= 1200) { 
		$('.profiles-img__wrap_active').height($('.profiles-description__wrap_active').height());
	};
	if (document.documentElement.clientWidth >= 768) { 
		$('.contact-information__wrap_desktop').height($('.contact-form').height());
	};
	if (document.documentElement.clientWidth <= 1199) {
		$('.profiles').addClass('text-center');
	};
	if (document.documentElement.clientWidth <= 767) {
		$('.contact-information__wrap_desktop').addClass('col-xl-12');
		$('.contact-information__wrap_desktop').appendTo('.contact-information__wrap_mobile');
	};
	if (document.documentElement.clientWidth <= 576) {
		$('.profiles-description_hide').addClass('col-6');
	};
	if (document.documentElement.clientWidth <= 430) {
		$('.service-item').removeClass('col-6');
	};
	$('.sndw-button').click(function() {
		$('.menu').slideToggle(500);
		$('.menu__list').removeClass('d-flex');
		$('.menu__list').addClass('menu_mobile');
		if($('.sndw-button').html()=='<i class="fas fa-bars"></i>') {
			$(this).html('<i class="fas fa-times"></i>');
		} else {
			$(this).html('<i class="fas fa-bars"></i>');
		}
	});
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
	$('.menu__link[href^="#"]').click(function() {
			let target = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 500);
			return false;
	});
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
});
