$(document).ready(function() {
	$('#subscribe-form').submit(function() {
		$.ajax({
			type:"POST",
			url:"mail.php",
			data: $(this).serialize()
		})
		.done(function() {
			alert('Спасибо за подписку!');
		});
		return false;
	});
	$('#contact-form').submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert('Спасибо!');
		});
		return false;
	});
});