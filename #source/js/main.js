$(window).load(function() {
	$('#site2').height($('#site1').height());
	$('#site3').height($('#site1').height()-1);
});
$(document).ready(function() {
	// $('.sample__img').click(function() {
	// 	alert('12312');
	// 	$(this).addClass('sample__wrap_hover');
	// 	},
	// 		function() {
	// 	$(this).removeClass('sample__wrap_hover');
	// });
});
	function PopUpShow() {
		// $('.pop-up').show();
		$('.pop-up').addClass('pop-up__hide');
	};
	function PopUpHide() {
		$('.pop-up').removeClass('pop-up__hide');
	}
