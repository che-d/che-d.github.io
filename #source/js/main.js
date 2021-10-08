$(window).load(function() {
	// $('#site2').height($('#site1').height());
	// $('#site3').height($('#site1').height()-1);
});
	function sites__button_hide() {
		$('.sites__button').css({'display':'none'});
	};
$(document).ready(function() {
	$('.sites__button').click(function(){
		$('.sites__button').addClass('sites__button_hide');
		setTimeout(sites__button_hide, 800);
		$('.sites__hide').addClass('sites__show').removeClass('sites__hide');
	});
	$('.overlay').click(function(){
		$('.overlay').removeClass('overlay_show');
		$('.pop-up').addClass('pop-up_hide');
		$('.pop-up').removeClass('pop-up_show');
	});
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
