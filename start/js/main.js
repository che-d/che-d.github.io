$(document).ready(function() {
	// Mail
	$().submit(function() {
		$.ajax({
			type:"POST",
			url:"mail.php",
			data: $(this).serialize()
		})
		.done(function() {
		});
		return false;
	});
	// Scroll button to top
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
	// Smooth scroll
	$('a[href^="#"]').click(function() {
			let target = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 500);
			return false;
	});
	// Scroll button to back
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
});
    /*
     * animated ellipsis
     * 
     * Created by Torsten Walter on 2008-04-06.
     * Copyright playground.magicrising.de. Some rights reserved.
     *
     * This script may be copied and reproduced
     * if this copyright notice is left intact.
     */
    
     var ellipsis = ['', '.', '..', '...'];
     var runEllipsis = true;
     function animateEllipsis(el, count) {
       el.innerHTML = ellipsis[count%4];
       if(runEllipsis == true) {
         window.setTimeout( function(){
           animateEllipsis(el, ++count);}, 250);
       }
     }
     function startEllipsis() {
       runEllipsis = true;
       animateEllipsis(document.getElementById('ellipsisSpan'), 0);
     }
     function stopEllipsis() {
       runEllipsis = false;
     }

    
    // just specific example stuff from here
    
    // toggles the button between start and stop and runs appropriate function
    function toggleButton() {
      var but = document.getElementById('toggleButton');
      
      if (but.value == "Start") {
        startEllipsis();
        but.value = "Stop";
      } else {
        stopEllipsis();
        but.value = "Start";
      };
    }
    
    // handle the window.onLoad event
    function initLoad() {
      // ad the click event to the toggle button
      var but = document.getElementById('toggleButton');
      if (window.attachEvent) {
        but.attachEvent('onclick', toggleButton);
      } else if(window.addEventListener) {
        but.addEventListener('click', toggleButton, true);
      }
    }
    
    // add the load event this way and it won't interfere with other scripts
    if (window.attachEvent) {
      window.attachEvent('onload', initLoad);
    } else  if(window.addEventListener){
      window.addEventListener('load', initLoad, true);
    }