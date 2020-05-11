$(document).ready(function() {
	$('.button[data-filter-1]').click(function (){
		if($(this).attr('data-filter-1')=='all') {
			if($(this).attr('data-val')=='off') {
				$('.button[data-filter-1]').attr('data-val','off');
				$(this).attr('data-val','on');
				$('.button[data-filter-1]').removeClass('button_full');
				$(this).addClass('button_full');
				$('.filter > div').slideDown(600);
			}
		} else {
			if($(this).attr('data-val')=='off') {
				$('.button[data-filter-1]').attr('data-val','off');
				$(this).attr('data-val','on');
				$('.button[data-filter-1]').removeClass('button_full');
				$(this).addClass('button_full');
				$('.button[data-filter-1]').addClass('button_empty3');
				$('.filter > div').slideUp(300);
				let filter = $(this).attr('data-filter-1');
				setTimeout(function() {
					$('.filter > div[data-filter-1 = '+ filter +']').slideDown(600);
				},400);
			}
		}
	});
	/*owl-carousel*/
	  $("#carousel_team").owlCarousel({
	  	autoplay:true,
	  	autoplayHoverPause:true,
	  	loop:true,
	  	responsive: {
		  	0:{
		  		items:1,
		  	},
		  	576:{
		  		items:2,
		  	},
		  	768:{
		  		items:3,
		  	}

	  	},
	  });
	/*Плавный скролл*/
		$('ul.menu a[href^="#"]').click(function() {
			let target = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 500);
			return false;
		})
	// Конпка "наверх"
		$(window).scroll(function() {
			if ($(this).scrollTop() !=0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		});
		$('#toTop').click(function() {
			$('html, body').animate({
				scrollTop:0
			}, 1000);
		});
	// Конпка "назад"	
		$.fn.scrollBottom = function() { 
			return $(document).height() - this.scrollTop() - this.height(); 
		};
		$(window).scroll(function() {
		if ($(this).scrollBottom() ==0) {
				$('#toBack').fadeIn();
			} else {
				$('#toBack').fadeOut();
			}
		});
	// меню
		$('.menu_sndw').click(function() {
			$('nav').slideToggle(500);
			$('nav ul').removeClass('d-flex');
			$('nav ul').addClass('menu_mobile');
			if($('.menu_sndw').html()=='<i class="fas fa-bars"></i>') {
				$(this).html('<i class="fas fa-times"></i>');
			} else {
				$(this).html('<i class="fas fa-bars"></i>');
			}
		});
});
	// //поиск
	// let lastResFind=""; // последний удачный результат
 //    let copy_page=""; // копия страницы в ихсодном виде
 //    function TrimStr(s) {
 //        s = s.replace( /^\s+/g, '');
 //        return s.replace( /\s+$/g, '');
 //    }
 //    function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода
 //        let obj = window.document.getElementById(inputId);
 //        let textToFind;

 //        if (obj) {
 //            textToFind = TrimStr(obj.value);//обрезаем пробелы
 //        } else {
 //            alert("Введенная фраза не найдена");
 //            return;
 //        }
 //        if (textToFind == "") {
 //            alert("Вы ничего не ввели");
 //            return;
 //        }

 //        if(document.body.innerHTML.indexOf(textToFind)=="-1")
 //            alert("Ничего не найдено, проверьте правильность ввода!");

 //        if(copy_page.length>0)
 //            document.body.innerHTML=copy_page;
 //        else copy_page=document.body.innerHTML;


 //        document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");//стираем предыдущие якори для скрола
 //        document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:red'>"+textToFind+"</a>"); //Заменяем найденный текст ссылками с якорем;
 //        lastResFind=textToFind; // сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
 //        window.location = '#'+textToFind;//перемещаем скрол к последнему найденному совпадению
 //    }