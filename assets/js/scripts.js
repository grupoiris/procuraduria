function openPDF(link) {
	$('.loading_wrap').show();
	
     var ref2 = window.open(link, '_system', 'location=yes');
     
     ref2.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
     ref2.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
     ref2.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
     ref2.addEventListener('exit', function(event) { alert(event.type); });
}

$(".splash").click(hidesplash);
setTimeout(hidesplash,2500);
function hidesplash(){
    $(".splash").removeClass("fadeIn"); 
	$(".splash").addClass("fadeOut");
    setTimeout(function(){
    	$(".splash").hide();
    	//$(".download_app").show();
    	},1000);
    $(".contenido").show();
    $(".contenido").css("height","auto");
    $(".swiper-button-next").addClass("fadeInLeft");
    $(".swiper-button-prev").addClass("fadeInRight");
}

$(function(){
    $(".loading").animate({"width": "100%","background": "#015883"}, 2000); 

});
function AbrirRedes(){
    $(".icon-left").animate({"opacity": "1","margin":"-35px 0 0 -50px"}, 200);
    $(".icon-center").animate({"opacity": "1","margin":"-55px 0 0 0"}, 400);
    $(".icon-right").animate({"opacity": "1","margin":"-35px 0 0 50px"}, 600);
    $("#redes").removeClass('rotate0');
    $("#redes").addClass('rotate45'); 
    $("#redes").attr("onclick","cerrarredes();");
}
function cerrarredes(){
    $(".icon-left").animate({"opacity": "0","margin":"0px"}, 300); 
    $(".icon-center").animate({"opacity": "0","margin":"0px"}, 300); 
    $(".icon-right").animate({"opacity": "0","margin":"0px"}, 300); 
    $("#redes").addClass('rotate0');
    $("#redes").removeClass('rotate45');
    $("#redes").attr("onclick","AbrirRedes();");  
}


$(document).ready(function() {
  $('.tab_top').bind('click', function(e) {
  e.preventDefault();
  var target = $(this).attr("href");
  var scrollToPosition = ($(target).offset().top)-50;
    $('html, body').stop().animate({ scrollTop: scrollToPosition}, 500, function() {
     location.hash = target; 
    });
    return false;
 });
 $('.loading_wrap').click(function(){
 	$('.loading_wrap').hide();
 });
 
});
function shareIos(){
	navigator.share("text","title","plain/text");
}
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

jQuery(document).delegate('.external', 'click', function (e) {
    window.open(e.target.href, '_system');
    e.preventDefault();
});

$(function(){
  var lastScrollTop = 0, delta = 5;
  $(window).scroll(function(){
  var nowScrollTop = $(this).scrollTop();
  if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
  if (nowScrollTop > lastScrollTop){
    $("footer").slideUp();
  } else { 
  	cerrarredes();
  	$("footer").slideDown();
  }
 lastScrollTop = nowScrollTop;
 }
 });
});
function sendEmail(){
	$('.error').hide();
	$('.send_button').hide();
	var nom = $("#nombre").val();
	var ema = $("#email").val();
	var msj = $("#mensaje").val();
	if(validateEmail(ema)){
		if(nom.length !== 0){
			if(msj.length !== 0){
				$.getJSON('http://procuraduriaapp.com/quejas.php?callback=?',{ nombre:nom, email:ema, mensaje:msj },function(data){
					$('.success').html("Enviado");
					$('.success').show();
					$('.error').hide();
		        }).done(function(data2) {
				    $('.success').html("Enviado");
					$('.success').show();
					$('.error').hide();
				  });				
			}
			else{
				$('.error').html("Ingresa tu Queja o denuncia.");
				$('.error').show();
			}
		}
		else{
			$('.error').html("Ingresa tu nombre");
			$('.error').show();
		}
		
		
	}
	else{
		$('.error').html("email invalido");
		$('.error').show();
	}
	setTimeout(function(){
	  $('.send_button').show();
	}, 1000);
}
function validateEmail(email){
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}
function openShare(type){
	var section = window.location.hash;
	switch(section){
		case '#tab1':
			url = 'http://www.facebook.com/sharer.php?s=100&u=http://irisdev.co/procuraduria/shares/prevencion.html';
			url_tw = 'https://twitter.com/intent/tweet/?text=Si participamos, prevenimos la corrupción y todos ganamos.  De este criterio surge la estrategia, USTED TIENE QUE VER PARTICIPE&via=pgn_col';
		break;
		case '#tab2':
			url = 'http://www.facebook.com/sharer.php?s=100&u=http://irisdev.co/procuraduria/shares/participe.html';
			url_tw = 'https://twitter.com/intent/tweet/?text=La Procuraduría General de la Nación, tiene como principio rector la lucha contra la corrupción y la impunidad.&via=pgn_col';
		break;
		case '#tab3':
			url = 'http://www.facebook.com/sharer.php?s=100&u=http://irisdev.co/procuraduria/shares/funciones.html';
			url_tw = 'https://twitter.com/intent/tweet/?text=Preventiva: Está orientada a anticipar y evitar la ocurrencia de hechos que afecten los derechos de las personas&via=pgn_col';
		break;
		case '#tab4':
			url = 'http://www.facebook.com/sharer.php?s=100&u=http://irisdev.co/procuraduria/shares/modelo.html';
			url_tw = 'https://twitter.com/intent/tweet/?text=Detección y advertencia de riesgos en la gestión pública. Promueve el respeto de las garantías de los derechos constitucionales.&via=pgn_col';
		break;
		case '#tab5':
			url = 'http://www.facebook.com/sharer.php?s=100&u=http://irisdev.co/procuraduria/shares/lineamientos.html';
			url_tw = 'https://twitter.com/intent/tweet/?text=Focalización en la garantía de los derechos.Se concentra en asegurar que se respeten los derechos de las personas.&via=pgn_col';
		break;
		case '#tab6':
			url = 'http://www.facebook.com/sharer.php?s=100&u=http://irisdev.co/procuraduria/shares/actuacion.html';
			url_tw = 'https://twitter.com/intent/tweet/?text=Los escenarios y tipos de actuación explican cómo se debe actuar preventivamente en la Procuraduría General de la Nación&via=pgn_col';
		break;
		case '#tab7':
			url = 'http://www.facebook.com/sharer.php?s=100&u=http://irisdev.co/procuraduria/shares/participacion.html';
			url_tw = 'https://twitter.com/intent/tweet/?text=La participación es eje de la democracia y la garantía de hacer parte de las decisiones que nos afectan.&via=pgn_col';
		break;
		default:
			url = 'http://www.facebook.com/sharer.php?s=100&u=http://irisdev.co/procuraduria/shares/general.html';
			url_tw = 'https://twitter.com/intent/tweet/?text=Usted tiene que ver, participe. www.procuraduriaapp.com&via=pgn_col';
		break;
	}
	if(type == 'fb'){
		var win = window.open(url, '_blank');
	}else{
		var win = window.open(url_tw, '_blank');
	}
	win.focus();
}
