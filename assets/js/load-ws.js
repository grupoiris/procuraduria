var arrayToContents 	=new Array();
var arrayGalleryHome 	=new Array();
var arrayComerciales 	=new Array();
function getContentToWs(){
	
	$.ajax({
        url:'http://procuraduriaapp.com/admin/dist/funciones.php',
	     data: {action: 'getContents'},
	     type: 'post',
	     success: function(output) {
			arrayToContents = jQuery.parseJSON(output);
			getMenu();
	      }
	});  
	
	/*Emulate Array to galery home*/
	arrayGalleryHome = ['procuraduria4.jpg','slider1.jpg','procurador.jpg','slider2.jpg','bandera.png','slider3.jpg','afiche.jpg'];
	
	/*Emulate Array to galery interna*/
	arrayGalleryInterna = ['galeria8.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg',
							'11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','IMG_0020.JPG','IMG_0818.JPG','IMG_3667.JPG','IMG_4083.JPG','IMG_4160.JPG'];
	
	/*Emulate Array to galery interna*/
	arrayComerciales = ['https://www.youtube.com/embed/d0MJvrvgmd0?rel=0','https://www.youtube.com/embed/ZRJx1KaedX4?rel=0"','https://www.youtube.com/embed/IrhVj7u5y0c?rel=0'];
	
	
    loadGaleriaHome();
}

//YOUTUBE API
clave_api = "AIzaSyCzTmI_-_rNXxo4iKfSOSPuvQkZHkAHDFo";

function loadComerciales(){
	for (var i=0; i<arrayComerciales.length; i++) {
		$('#comerciales').append('<div  class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="'+arrayComerciales[i]+'"></iframe>  </div>');
	}
}
function loadLastVideos(){
	$.get(
	   "https://www.googleapis.com/youtube/v3/channels",{
	   part : 'contentDetails', 
	   forUsername : 'PGNCUENTAOFICIAL',
	   key: clave_api},
	   function(data) {
	      $.each( data.items, function( i, item ) {
	          pid = item.contentDetails.relatedPlaylists.uploads;
	          getVids(pid);
	      });
	  }
	);
}
function getVids(pid){
    $.get(
        "https://www.googleapis.com/youtube/v3/playlistItems",{
        part : 'snippet', 
        maxResults : 2,
        playlistId : pid,
        key: clave_api},
        function(data) {
            var results = '';
            $.each( data.items, function( i, item ) {
            	results += '<div  class="embed-responsive embed-responsive-16by9">   <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/'+item.snippet.resourceId.videoId+'?rel=0"></iframe></div>';
            });
            $('#video').html(results);
        }
    );
}

function loadColeccionables(){
	var html_coleccionables = '';
		/*html_coleccionables =  '<li><a href="#!" onclick=\'window.open("https://irisdev.co/procuraduria/coleccionable_1.pdf", "_system");\' ><img src="assets/img/icon_col_azul.png" class="coleccionable_icon"></a><a href="#!" onclick="window.open("https://irisdev.co/procuraduria/coleccionable_1.pdf", "_system");" class="coleccionable_titulo">Coleccionable 1: <p> Procuraduría General de la Nación y la participación ciudadana.</p></a></li>';
		html_coleccionables += '<li><a href="#!" onclick=\'window.open("https://irisdev.co/procuraduria/coleccionable_2.pdf", "_system");\' ><img src="assets/img/icon_col_azul.png" class="coleccionable_icon"></a><a href="#!" onclick="window.open("https://irisdev.co/procuraduria/coleccionable_2.pdf", "_system");" class="coleccionable_titulo">Coleccionable 2: <p> Democracia y participación: veedurías ciudadanas.</p></a></li>';*/
		html_coleccionables += '<li><a href="#!" onclick="window.open(\'https://docs.google.com/viewer?url=https://irisdev.co/procuraduria/coleccionable_1.pdf\', \'_blank\', \'location=yes\');" ><img src="assets/img/icon_col_azul.png" class="coleccionable_icon"></a><a href="#!" onclick="window.open(\'https://docs.google.com/viewer?url=https://irisdev.co/procuraduria/coleccionable_1.pdf\', \'_blank\', \'location=yes\');" class="coleccionable_titulo">Coleccionable 1: <p> Procuraduría General de la Nación y la participación ciudadana.</p></a>	<a href="#!" onclick="window.open(\'https://docs.google.com/viewer?url=https://irisdev.co/procuraduria/coleccionable_1.pdf\', \'_blank\', \'location=yes\');" class="link_download" style="margin-left: 40px;">Descargar</a></li>';
		html_coleccionables += '<li><a href="#!" onclick="window.open(\'https://docs.google.com/viewer?url=https://irisdev.co/procuraduria/coleccionable_2.pdf\', \'_blank\', \'location=yes\');" ><img src="assets/img/icon_col_azul.png" class="coleccionable_icon"></a><a href="#!" onclick="window.open(\'https://docs.google.com/viewer?url=https://irisdev.co/procuraduria/coleccionable_2.pdf\', \'_blank\', \'location=yes\');" class="coleccionable_titulo">Coleccionable 2: <p> Democracia y participación: veedurías ciudadanas.</p></a>					<a href="#!" onclick="window.open(\'https://docs.google.com/viewer?url=https://irisdev.co/procuraduria/coleccionable_2.pdf\', \'_blank\', \'location=yes\');" class="link_download" style="margin-left: 40px;">Descargar</a></li>';
	$('.coleccionables').html(html_coleccionables);
}
function loadGaleriaHome(){
	var html_galeria  = '<div class="swiper-wrapper">';
	for (var i=0; i<arrayGalleryHome.length; i++) {
		 html_galeria += '<div class="swiper-slide" style="background:url(http://procuraduriaapp.com/ws/galeria/home/'+arrayGalleryHome[i]+');"></div>';
	}
    html_galeria += '</div>';
    
    html_galeria += '<div class="swiper-pagination"></div>';
    html_galeria += '<div class="swiper-button-next animated"></div>';
    html_galeria += '<div class="swiper-button-prev animated "></div>';
	
	 $('.sw1').html(html_galeria);
	 setTimeout(function(){ 
	 	var swiper = new Swiper('.sw1', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        spaceBetween: 30,
	        centeredSlides: true,
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        autoplay: 5000,
	        autoplayDisableOnInteraction: false,
	        slidesPerView: 1,
	        paginationClickable: true,
	        loop: true
	    });
	}, 1000);
	 
}

function loadGaleriaInterna(){
	var html_galeria = '<div class="swiper-wrapper">';
		for (var i=0; i<arrayGalleryInterna.length; i++) {
			html_galeria += '<div class="swiper-slide" style="background:url(http://procuraduriaapp.com/ws/galeria/uploads/'+arrayGalleryInterna[i]+');"></div>';
		}
		html_galeria += '</div><div class="swiper-pagination2"></div>';
	 $('.sw2').append(html_galeria);
	 setTimeout(function(){ 
	 	var swiper2 = new Swiper('.sw2 ', {
	        pagination: '.swiper-pagination2',
	        paginationClickable: false,
	        spaceBetween: 30,
	        centeredSlides: true,
	        autoplay: 5000,
	        autoplayDisableOnInteraction: false,
	        slidesPerView: 1,
	        paginationClickable: true,
	        loop: true,
	    });
	}, 1000);
	 
}

function getMenu(){
	$('.acordion').html("cargando...");
	var menu_html = '';
	for (var i=0; i<arrayToContents.length; i++) { 
		content = arrayToContents[i];
		content_title = content.title;
		if(i<=8){	color= i;	}else{	color=8;	}
		menu_html = menu_html+'<li data-bg="blue'+color+'"><a href="#tab1" class="tab_top" onclick="loadContent(\''+content.name+'\')";><div id="tab1" class="acordion-title">'+content_title+'</div></a><div class="acordion-content content_'+content.name+'" ></div></li>';
	}
	$('.acordion').html(menu_html);
	
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
}
function decode_utf8(s) { 
  return decodeURIComponent(escape(s)); 
}
function ParseHtmlfunction(text){
	parse_text = $.parseHTML(text);
	new_text = parse_text[0].data;
	return new_text;
}
function fixedEncodeURIComponent (str) {
  //return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A").replace(/\*/g, "%2F");
  return str.replace(/\/?$/, '/');
}
function loadContent(content_to_load){
	$('.content_'+content_to_load).html("cargando..");
	if(content_to_load){
		content = getContent(content_to_load);
		if(content){
			$('.content_'+content_to_load).html(decode_utf8(content.content_html));
		}
		if(content.imagenes.length!=0){
			array_ima = $.parseJSON(content.imagenes.urls);
			html_galleryImages = '';
			$.each(array_ima, function (index, value) {
				html_galleryImages += '<div class="swiper-slide" style="background:url(http://procuraduriaapp.com/ws/galeria/uploads/'+value.img+');"></div>';
			});
			$('.content_'+content_to_load).append('<h2>'+content.imagenes.nombre+'</h2>');
			$('.content_'+content_to_load).append('<div class="swiper-container sw1"><div class="swiper-wrapper">'+html_galleryImages);
			$('.content_'+content_to_load).append('</div><div class="swiper-pagination"></div><div class="swiper-button-next animated"></div><div class="swiper-button-prev animated "></div></div>');
		    setTimeout(function(){ 
		    	var swiper = new Swiper('.sw1', {
			        pagination: '.swiper-pagination',
			        paginationClickable: true,
			        spaceBetween: 30,
			        centeredSlides: true,
			        nextButton: '.swiper-button-next',
			        prevButton: '.swiper-button-prev',
			        autoplay: 5000,
			        autoplayDisableOnInteraction: false,
			        slidesPerView: 1,
			        paginationClickable: true,
			        loop: true
			    });
		    }, 1000);
		}
		if(content.videos.length!=0){
			if(content.videos.id=="1"){
				$('.content_'+content_to_load).append('<h2>La Procuradurí­a al aire</h2>');
				$('.content_'+content_to_load).append('<div id="video"></div>');
				setTimeout(function(){ loadLastVideos();}, 1000);
			}
			if(content.videos.id=="2"){
				$('.content_'+content_to_load).append('<h2>Mensajes institucionales de televisión, videos y mensaje radial</h2>');
				$('.content_'+content_to_load).append('<div id="comerciales"></div>');
				loadComerciales();	
			}else{
				$('.content_'+content_to_load).append('<h2>'+content.videos.titulo+'</h2>');
				$('.content_'+content_to_load).append('<div id="video"><iframe width="100%" height="350" src="'+content.videos.urls+'" frameborder="0" allowfullscreen></iframe></div>');
			}
		}
		if(content.documentos.length!=0){
			$('.content_'+content_to_load).append('<h2>'+content.documentos.nombre+'</h2>');
			$('.content_'+content_to_load).append('<p>'+content.documentos.descripcion+'</p>');
			var url_doc = 'http://procuraduriaapp.com/ws/documentos/'+content.documentos.url;
			button_html  = '<a href="'+content.documentos.url+'" target="_blank"><img src="assets/img/icon_col_azul.png" class="coleccionable_icon"></a>';
			button_html += '<a href="#!" onclick="window.open(\''+url_doc+'\', \'_system\', \'location=no\');" class="coleccionable_titulo">'+content.documentos.titulo+'</a>';
			$('.content_'+content_to_load).append(button_html);
		}
		if(content.name==='tramites'){
			formulario_html = '<ul class="topics" ><li>Escríbanos<br /><div id="contact_form"><p class="error"></p><p class="success"></p><label>Nombre</label><input type="text" id="nombre" name="nombre"  ><label>Email</label><input type="text" id="email" name="email" ><label>Realice sus quejas o denuncias</label><textarea name="content" id="mensaje" ></textarea><hr ><button onclick="sendEmail();" class="send_button">Enviar</button></div></li></ul>';
			$('.content_'+content_to_load).append(formulario_html);
		}
	}else{
		console.log("sin contenido");
	}
	/*if(content_to_load==='_la_procuraduria_en_accion_'){
		loadComerciales();
		//loadVideos();
		loadLastVideos();
		loadGaleriaInterna();
	}*/
	
}
function getContent(content_to_load){
	var content_html;
	for (var i=0; i<arrayToContents.length; i++) { 
		content = arrayToContents[i];
		if(content.name === content_to_load){
			return content;
		}
	}
}