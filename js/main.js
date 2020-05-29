$(window).load(function() {
	$('#site2').height($('#site1').height());
	$('#site3').height($('#site1').height()-1);
});
$(document).ready(function() {
	$('.sample__wrap').hover(function() {
		$(this).addClass('sample__wrap_hover');
		},
			function() {
		$(this).removeClass('sample__wrap_hover');
	});
});
