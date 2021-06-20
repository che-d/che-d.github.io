$(document).ready(function() {
	$('.telefone__wrap').hover(function(){
		$('.telefone__img_wrap').addClass('button_run_right').removeClass('button_run_left');;
		$('.telefone__num').addClass('tel_run_left').removeClass('tel_run_right');
	}, function() {
		$('.telefone__img_wrap').addClass('button_run_left').removeClass('button_run_right');
		$('.telefone__num').addClass('tel_run_right').removeClass('tel_run_left');
	});
});