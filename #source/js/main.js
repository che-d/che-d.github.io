$(window).load(function() {
	// $('#site2').height($('#site1').height());
	// $('#site3').height($('#site1').height()-1);
});
$(document).ready(function() {
	// $('.sample__wrap').click(function() {
	// 	alert('12312');
	// 	// $(this).addClass('sample__wrap_hover');
	// 	$('.pop-up').addClass('pop-up__hide');
	// 	},
	// 		function() {
	// 	// $(this).removeClass('sample__wrap_hover');
	// 	$('.pop-up').removeClass('pop-up__hide');
	// });
});
	function PopUpShow(id) {
		$(id).addClass('pop-up_show');
		$(id).removeClass('pop-up_hide');
		$('.overlay').addClass('overlay_show');
	};
	function PopUpHide(id) {
		$(id).addClass('pop-up_hide');
		$(id).removeClass('pop-up_show');
		$('.overlay').removeClass('overlay_show');
	}
