$(document).ready(function() {
	$('.telefone__wrap').hover(function(){
		$('.telefone__img_w').addClass('button_run_right').removeClass('button_run_left');;
		$('.telefone__num').addClass('tel_run_left').removeClass('tel_run_right');
		// $('.telefone__img_w:after').css({'-webkit-animation': 'pulse1 2s linear infinite','-moz-animation': 'pulse1 2s linear infinite','animation': 'pulse1 2s linear infinite'});
	}, function() {
		$('.telefone__img_w').addClass('button_run_left').removeClass('button_run_right');
		$('.telefone__num').addClass('tel_run_right').removeClass('tel_run_left');
		// $('.telefone__img_w:after').css('button_run_left');
	});
});