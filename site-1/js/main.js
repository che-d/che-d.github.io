$(document).ready(function() {
	$('.product__button[data-filter-1]').click(function (){
		if($(this).attr('data-filter-1')=='all') {
			if($(this).attr('data-val')=='off') {
				$('.product__button[data-filter-1]').attr('data-val','off');
				$(this).attr('data-val','on');
				$('.product__button[data-filter-1]').removeClass('product__button_active');
				$(this).addClass('product__button_active');
				$('.img-filter > div').slideUp(400);
				setTimeout(function() {
				$('.img-filter > div').slideDown(600);
				},400);
			}
		} else {
			if($(this).attr('data-val')=='off') {
				$('.product__button[data-filter-1]').attr('data-val','off');
				$(this).attr('data-val','on');
				$('.product__button[data-filter-1]').removeClass('product__button_active');
				$(this).addClass('product__button_active');
				$('.product__button[data-filter-1]').addClass('product__button');
				$('.img-filter > div').slideUp(400);
				let filter = $(this).attr('data-filter-1');
				setTimeout(function() {
					$('.img-filter > div[data-filter-1 = '+ filter +']').slideDown(600);
				},400);
			}
		}
	});
	$('.profiles__description img').click(function() {
		let smallHref = $(this).attr('src');
		let bigHref = $('.profiles__img-wrap_active img').attr('src');
		$('.profiles__img-wrap_active img').fadeIn(10000).attr('src', smallHref);
		$(this).attr('src',bigHref);
		let name_p = $(this).siblings('.profiles__name-wrap').find('p').html();
		let name_h3 = $('.profiles__description_active').find('h3').html();
		$('.profiles__description_active').find('h3').html(name_p);
		$(this).siblings('.profiles__name-wrap').find('p').html(name_h3);
		let text_employee = $(this).siblings('.profiles__text-wrap').find('p').html();
		let profile_text = $('.profiles__text_active').html();
		$('.profiles__text_active').html(text_employee);
		$(this).siblings('.profiles__text-wrap').find('p').html(profile_text);
		let link_employee = $(this).siblings('.profiles__list').html();
		let profile_link = $('.profiles__list_active').html();
		$('.profiles__list_active').html(link_employee);
		$(this).siblings('.profiles__list').html(profile_link);
		return false;
	});
	if (document.documentElement.clientWidth >= 1200) { 
		$('.profiles__img-wrap_active').height($('.profiles__description-wrap').height());
	};
	if (document.documentElement.clientWidth >= 768) { 
		$('.contact_info').height($('form.form').height());
	};
	if (document.documentElement.clientWidth <= 1199) {
		$('.profiles').addClass('text-center');
	};
	if (document.documentElement.clientWidth <= 767) {
		$('.contact_info').addClass('col-xl-12');
		$('.contact_info').appendTo('#for_contact_info');
	};
	if (document.documentElement.clientWidth <= 576) {
		$('.profiles__description').addClass('col-6');
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
