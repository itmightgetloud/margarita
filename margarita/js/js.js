$(document).ready(function(){
    $(this).scrollTop(0);
});
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    
    var navbarOffset = 80;
    if (target.selector == "#main") 
        navbarOffset = 230;
    
    if (target.length && target.selector != '#myCarousel') {
      $('html, body').animate({
        scrollTop: target.offset().top - navbarOffset
      }, 1000);
      return false;
    } 
  }
});