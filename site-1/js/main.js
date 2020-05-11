$(document).ready(function() {
	$('.product button[filter]').click(function (){
		if($(this).attr('filter')=='all') {
			if($(this).attr('val')=='off') {
				$('.product button[filter]').attr('val','off');
				$(this).attr('val','on');
				$('.product button[filter]').removeClass('product_b_active');
				$(this).addClass('product_b_active');
				$('.filter > div').slideUp(400);
				setTimeout(function() {
				$('.filter > div').slideDown(600);
				},400);
			}
		} else {
			if($(this).attr('val')=='off') {
				$('.product button[filter]').attr('val','off');
				$(this).attr('val','on');
				$('.product button[filter]').removeClass('product_b_active');
				$(this).addClass('product_b_active');
				$('.product button[filter]').addClass('product_b');
				$('.filter > div').slideUp(400);
				let filter = $(this).attr('filter');
				setTimeout(function() {
					$('.filter > div[filter = '+ filter +']').slideDown(600);
				},400);
			}
		}
	});
	$('.small_img img').click(function() {
		let smallHref = $(this).attr('src');
		let bigHref = $('#big_img img').attr('src');
		$('#big_img img').fadeIn(10000).attr('src', smallHref);
		$(this).attr('src',bigHref);
		let name_p = $(this).siblings('.name_employee').find('p').html();
		let name_h3 = $('#profile').find('h3').html();
		$('#profile').find('h3').html(name_p);
		$(this).siblings('.name_employee').find('p').html(name_h3);
		let text_employee = $(this).siblings('.text_employee').find('p').html();
		let profile_text = $('#profile_text').html();
		$('#profile_text').html(text_employee);
		$(this).siblings('.text_employee').find('p').html(profile_text);
		let link_employee = $(this).siblings('.link_employee').html();
		let profile_link = $('#profile_link').html();
		$('#profile_link').html(link_employee);
		$(this).siblings('.link_employee').html(profile_link);
		return false;
	});
	if (document.documentElement.clientWidth >= 768) { 
		$('.contact_info').height($('form.form').height());
	};
	if (document.documentElement.clientWidth <= 767) {
		$('.contact_info').addClass('col-xl-12');
		$('.contact_info').appendTo('#for_contact_info');
	};
	if (document.documentElement.clientWidth >= 1200) { 
		$('#big_img').height($('#decription_profile').height());
	};
	if (document.documentElement.clientWidth <= 1199) {
		$('.our_team').addClass('text-center');
	};
	if (document.documentElement.clientWidth <= 430) {
		$('.services .col-6').removeClass('col-6');
	};
	if (document.documentElement.clientWidth <= 576) {
		$('.wait_team_img').addClass('col-6');
	};
	$('.menu_sndw').click(function() {
		$('nav').slideToggle(500);
		$('nav ul').removeClass('d-flex');
		$('nav ul').addClass('menu_mobile');
		if($('.menu_sndw').html()=='<i class="fas fa-bars"></i>') {
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
	$('.menu ul a[href^="#"]').click(function() {
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
