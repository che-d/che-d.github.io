$(document).ready(function () {
	$('.sample__wrap').hover(function() {
		$(this).addClass('sample__wrap__hover');
	},
	function() {
		$(this).removeClass('sample__wrap__hover');
	})
})