$(document).ready(function() {
	// Mail
	$().submit(function() {
		$.ajax({
			type:"POST",
			url:"mail.php",
			data: $(this).serialize()
		})
		.done(function() {
		});
		return false;
	});
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
	$('a[href^="#"]').click(function() {
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
			$(this).parents('.webinar').children('.webinar__img_cover').children('.webinar__tizer').slideToggle(500);
			
		});
	$('.header__button').hover(
		function() {
			$(this).parent('.header__button_wrap').toggleClass('header__button_hover');
		});
});