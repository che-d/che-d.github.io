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

$('.js-tilt').tilt({
    glare: true,
    maxGlare: .5,
})
// 	{
// maxTilt:        20,
// perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
// easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
// scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
// speed:          300,    // Speed of the enter/exit transition.
// transition:     true,   // Set a transition on enter/exit.
// axis:           null,   // What axis should be disabled. Can be X or Y.
// reset:          true,   // If the tilt effect has to be reset on exit.
// glare:          false,  // Enables glare effect
// maxGlare:       1       // From 0 - 1.
// }

});