$(document).ready(function() {
	$('.sample__wrap').hover(function() {
		$(this).addClass('sample__wrap__hover');
		},
			function() {
		$(this).removeClass('sample__wrap__hover');
	});
});
$(window).load(function() {
	$('#site2').height($('#site1').height('', - 1));
	$('#site3').height($('#site1').height() - 1);
});
