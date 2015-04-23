

/*$(".splash").click(hidesplash);
setTimeout(hidesplash,2500);*/
function hidesplash(){
    $(".splash").removeClass("fadeIn"); 
    $(".splash").addClass("fadeOut");
    setTimeout(function(){$(".splash").hide();},1000);
    $(".contenido").css("height","auto");
    $(".swiper-button-next").addClass("fadeInLeft");
    $(".swiper-button-prev").addClass("fadeInRight");
}

$(function(){
    $(".loading").animate({"width": "100%","background": "#015883"}, 2000); 



    var acordion = $('.acordion');
	if(acordion.length > 0){
		acordion.find('.acordion-title').click(function(){
			var elm = $(this), 
			padre = elm.parents('li'),
			conts = elm.parents('.acordion').find('li').not(padre);
			padre.toggleClass('activo');
			conts.removeClass('activo');			
		});
	}
    
});
        
        
        $("#redes").toggle(function(){
            $(".icon-left").animate({"opacity": "1","margin":"-35px 0 0 -50px"}, 200);
            $(".icon-center").animate({"opacity": "1","margin":"-55px 0 0 0"}, 400);
            $(".icon-right").animate({"opacity": "1","margin":"-35px 0 0 50px"}, 600);
            $("#redes").removeClass('rotate0');
            $("#redes").addClass('rotate45'); 
        },
          function(){
            $(".icon-left").animate({"opacity": "0","margin":"0px"}, 300); 
            $(".icon-center").animate({"opacity": "0","margin":"0px"}, 300); 
            $(".icon-right").animate({"opacity": "0","margin":"0px"}, 300); 
            $("#redes").addClass('rotate0');
            $("#redes").removeClass('rotate45');  
        });


$(document).ready(function() {
  $('a[href*=#]').bind('click', function(e) {
  e.preventDefault();
  var target = $(this).attr("href");
  var scrollToPosition = $(target).offset().top-50;
    $('html, body').stop().animate({ scrollTop: scrollToPosition}, 500, function() {
     location.hash = target; 
    });
    return false;
 });
});


function openPS(img) {
    var pswpElement = document.querySelectorAll('.pswp')[0];
    var items = [{ src: 'assets/img/'+img, w: 1024, h: 1088 }];    
    var options = {      
        history: false,
        focus: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0        
    };    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};



$(function(){
  var lastScrollTop = 0, delta = 5;
  $(window).scroll(function(){
  var nowScrollTop = $(this).scrollTop();
  if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
  if (nowScrollTop > lastScrollTop){
    $("footer").slideUp();
  } else { 
    $("footer").slideDown();
  }
 lastScrollTop = nowScrollTop;
 }
 });
});


