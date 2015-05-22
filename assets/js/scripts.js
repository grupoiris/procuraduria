function openPDF() {
	alert("openPDf");
     var ref = window.open('http://irisdev.co/procuraduria/coleccionable_1.pdf', '_blank', 'location=yes');
     ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
     ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
     ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
     ref.addEventListener('exit', function(event) { alert(event.type); });
}

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

setTimeout(loadComerciales,500);
setTimeout(loadVideos,1000);
function loadVideos(){
	$('#video').append('<div  class="embed-responsive embed-responsive-16by9">   <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/n4vlnY0dn4E?rel=0"></iframe>  </div>'); 
	$('#video').append('<div class="embed-responsive embed-responsive-16by9">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/3MBH85SWggg?rel=0"></iframe> </div>');	
}

function loadComerciales(){
	$('#comerciales').append('<div  class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/d0MJvrvgmd0?rel=0"></iframe>  </div> ');
	$('#comerciales').append('<div class="embed-responsive embed-responsive-16by9">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ZRJx1KaedX4?rel=0"></iframe> </div>');
	$('#comerciales').append('<div class="embed-responsive embed-responsive-16by9">  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/IrhVj7u5y0c?rel=0"></iframe> </div>');	
}
function sendEmail(){
	$('.error').hide();
	$('.send_button').hide();
	var nom = $("#nombre").val();
	var ema = $("#email").val();
	var msj = $("#mensaje").val();
	if(validateEmail(ema)){
		if(nom.length !== 0){
			if(msj.length !== 0){
				/*cordova.plugins.email.open({
				    to:      'julian.montoya@grupoiris.co',
				    subject: 'Queja o Reclamo desde ProcuraduriaApp',
				    body:    '<h1>Nice greetings from Leipzig</h1>',
				    isHtml:  true
				});*/
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
