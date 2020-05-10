$(document).ready(function () {
	if ($(window).load() == true) {
		$('.sample__wrap').hover(function() {
			$(this).addClass('sample__wrap__hover');
		},
		function() {
			$(this).removeClass('sample__wrap__hover');
		});
		$('#site2').height($('#site1').height());
		$('#site3').height($('#site1').height());
	}
});
