$('body').css('padding-top', $('.all-header-section').outerHeight() + 'px')

// detect scroll top or down
if ($('.all-header-section').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.all-header-section').removeClass('scrolled-down').addClass('scrolled-up');
        }
       else if($(this).scrollTop() >180) {
            $('.all-header-section').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}


function togglenav(){
	document.getElementById("bs-example-navbar-collapse-1").style.display="block"
	document.getElementById("togglenav").style.display="none"
	document.getElementById("navbarmobile").style.top="0"
	document.getElementById("navbarmobile").style.display="block"
	document.getElementById("navbarmobile").style.height="100vh"
	document.getElementById("bs-example-navbar-collapse-1").style.height="100vh"
	document.getElementById("bodyscroll").style.overflowY = "hidden";
	document.getElementsByTagName('html')[0].style.overflowY = "hidden";
	document.getElementById("navbarmobile").style.overflowY = "auto";
	return false;
}
function mobileCrox(){
	document.getElementById("bs-example-navbar-collapse-1").style.display="none"
	document.getElementById("bs-example-navbar-collapse-1").style.height="0"
	document.getElementById("navbarmobile").style.top="-90"

	document.getElementById("navbarmobile").style.display="none"
	document.getElementById("togglenav").style.display="block"
	document.getElementById("bodyscroll").style.overflowY = "auto";
	document.getElementsByTagName('html')[0].style.overflowY = "auto";
	return false;
}






$(window).resize(function(){
   console.log('resize called');
   var width = $(window).width();
   if(width >= 1368){
       $('*[id^="bigcontainer"]').removeClass('container-fluid').addClass('container');
   }
   else{
       $('*[id^="bigcontainer"]').removeClass('container').addClass('container-fluid');
   }
})
.resize();//trigger the resize event on page load.











		
/////////////...................back to top
		
		
		
		
				const scrollToTopButton = document.getElementById('js-top');
			

			window.addEventListener('scroll', () => {
			  // Get the current scroll value
			  let ye = window.scrollY;
			  if (ye > 180) {
				scrollToTopButton.style.bottom = '10px'
			  } else {
				scrollToTopButton.style.bottom = '-200px'
			  }
			})




