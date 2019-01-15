$(document).on('scroll', function(){
  if ($(window).scrollTop() > 100) {
    $('.s-navbar').addClass('show');
  } else {
    $('.s-navbar').removeClass('show');
  }
});

$('.navbar-nav > li > a').addClass('page-scroll');
$('a.page-scroll, a.scroll-bottom').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html,body').animate({
		  scrollTop: target.offset().top - 40
		}, 900);
		return false;
	  }
	}
});

$('body').scrollspy({ 
	target: '.navbar',
	offset: 80
})


