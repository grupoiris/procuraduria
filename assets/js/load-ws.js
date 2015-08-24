var arrayToContents 	=new Array();
var arrayGalleryHome 	=new Array();
var arrayComerciales 	=new Array();
var SES = window.localStorage;
var isPhonegap = false;
function checkConnection() {
	var onLine = isOnLine();
	alert(onLine);
	if( onLine != 'none' && onLine != 'des'){
		SES.arrayToContents 	=new Array();
		SES.arrayGalleryHome 	=new Array();
		SES.arrayComerciales 	=new Array();
		getContentToWs();
	}else{
		getContentToWs();
	}
	getContentToWs();
}
function isOnLine(){
	setTimeout(function(){
		console.log(navigator.connection);
		console.log("navigator connection type");
		alert("navigator.connection.type");
		alert(navigator.connection.type);
		console.log(navigator.connection.type);
		var networkState = navigator.connection.type;
		var states = {};
		states[Connection.UNKNOWN]  = 'des';
		states[Connection.ETHERNET] = 'net';
		states[Connection.WIFI]     = 'wifi';
		states[Connection.CELL_2G]  = '2g';
		states[Connection.CELL_3G]  = '3g';
		states[Connection.CELL_4G]  = '4g';
		states[Connection.NONE]     = 'none';
		/*console.log("networkState");
		console.log(networkState);
		console.log(states[networkState]);*/
		return states[networkState];
	}, 500);
}
function getContentToWs(){
	console.log("getContentToWs");
	alert("getContentToWs");
	$.ajax({
        url:'http://procuraduriaapp.com/admin/dist/funciones.php',
	     data: {action: 'getContents'},
	     type: 'post',
	     success: function(output) {
			arrayToContents = jQuery.parseJSON(output);
			SES.arrayToContents = output;
			getMenu();
	      }
	});  
	$.ajax({
        url:'http://procuraduriaapp.com/admin/dist/funciones.php',
	     data: {action: 'getPrintGalleryInfo',gallery_id: '7'},
	     type: 'post',
	     success: function(output) {
			arrayGalleryHome_re = jQuery.parseJSON(output);
			arrayGalleryHome = jQuery.parseJSON(arrayGalleryHome_re);
			SES.arrayGalleryHome = arrayGalleryHome_re;
			loadGaleriaHome();
	      }
	}); 
	$.ajax({
        url:'http://procuraduriaapp.com/admin/dist/funciones.php',
	     data: {action: 'getDocuments'},
	     type: 'post',
	     success: function(output) {
			arrayToDocuments = jQuery.parseJSON(output);
			SES.arrayToDocuments = output;
	      }
	});  
	/*
	arrayGalleryHome = ['procuraduria4.jpg','slider1.jpg','procurador.jpg','slider2.jpg','bandera.png','slider3.jpg','afiche.jpg'];
	
	arrayGalleryInterna = ['galeria8.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg',
							'11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','IMG_0020.JPG','IMG_0818.JPG','IMG_3667.JPG','IMG_4083.JPG','IMG_4160.JPG'];
	*/
	arrayComerciales = ['https://www.youtube.com/embed/d0MJvrvgmd0?rel=0','https://www.youtube.com/embed/ZRJx1KaedX4?rel=0"','https://www.youtube.com/embed/IrhVj7u5y0c?rel=0'];
	SES.arrayComerciales = arrayComerciales;
	
}

//YOUTUBE API
clave_api = "AIzaSyCzTmI_-_rNXxo4iKfSOSPuvQkZHkAHDFo";

/*function loadComerciales(){
	for (var i=0; i<arrayComerciales.length; i++) {
		$('#comerciales').append('<div  class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="'+arrayComerciales[i]+'"></iframe>  </div>');
	}
}*/

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
        maxResults : 3,
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
		html_coleccionables += '<li><a href="#!" onclick="window.open(\'https://docs.google.com/viewer?url=https://irisdev.co/procuraduria/coleccionable_1.pdf\', \'_blank\', \'location=yes\');" ><img src="assets/img/icon_col_azul.png" class="coleccionable_icon"></a><a href="#!" onclick="window.open(\'https://docs.google.com/viewer?url=https://irisdev.co/procuraduria/coleccionable_1.pdf\', \'_blank\', \'location=yes\');" class="coleccionable_titulo">Coleccionable 1: <p> Procuraduría General de la Nación y la participación ciudadana.</p></a>	<a href="#!" onclick="window.open(\'https://docs.google.com/viewer?url=https://irisdev.co/procuraduria/coleccionable_1.pdf\', \'_blank\', \'location=yes\');" class="link_download" style="margin-left: 40px;">Descargar</a></li>';
		html_coleccionables += '<li><a href="#!" onclick="window.open(\'https://docs.google.com/viewer?url=https://irisdev.co/procuraduria/coleccionable_2.pdf\', \'_blank\', \'location=yes\');" ><img src="assets/img/icon_col_azul.png" class="coleccionable_icon"></a><a href="#!" onclick="window.open(\'https://docs.google.com/viewer?url=https://irisdev.co/procuraduria/coleccionable_2.pdf\', \'_blank\', \'location=yes\');" class="coleccionable_titulo">Coleccionable 2: <p> Democracia y participación: veedurías ciudadanas.</p></a>					<a href="#!" onclick="window.open(\'https://docs.google.com/viewer?url=https://irisdev.co/procuraduria/coleccionable_2.pdf\', \'_blank\', \'location=yes\');" class="link_download" style="margin-left: 40px;">Descargar</a></li>';
	$('.coleccionables').html(html_coleccionables);
}
function loadGaleriaHome(){
	var html_galeria  = '<div class="swiper-wrapper">';
	
	array_gale_home = jQuery.parseJSON(SES.arrayGalleryHome);
	for (var i=0; i<array_gale_home.length; i++) {
		 html_galeria += '<div class="swiper-slide" style="background:url(http://procuraduriaapp.com/ws/galeria/home/'+arrayGalleryHome[i].img+');"></div>';
	}
    html_galeria += '</div>';
    
    html_galeria += '<div class="swiper-pagination"></div>';
    html_galeria += '<div class="swiper-button-next animated"></div>';
    html_galeria += '<div class="swiper-button-prev animated "></div>';
	
	 $('.sw_home').html(html_galeria);
	 setTimeout(function(){ 
	 	var swiper = new Swiper('.sw_home', {
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
	}, 500);
	 
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
	}, 500);
	 
}

function getMenu(){
	$('.acordion').html("cargando...");
	var menu_html = '';
	array_cont = jQuery.parseJSON(SES.arrayToContents);
	for (var i=0; i<array_cont.length; i++) { 
		content = array_cont[i];
		content_title = content.title;
		if(i<=8){	color= i;	}else{	color=8;	}
		if (content.id === "42"){
			menu_html = menu_html+'<li data-bg="yellow"><a href="#tab1" class="tab_top" onclick="loadContent(\''+content.name+'\')";><div id="tab1" class="acordion-title">'+content_title+'</div></a><div class="acordion-content content_'+content.name+'" ></div></li>';	
		}else{
			menu_html = menu_html+'<li data-bg="blue'+color+'"><a href="#tab1" class="tab_top" onclick="loadContent(\''+content.name+'\')";><div id="tab1" class="acordion-title">'+content_title+'</div></a><div class="acordion-content content_'+content.name+'" ></div></li>';
		}
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
		$('.content_'+content_to_load).html('');
		content = getContent(content_to_load);
		//Impresion de galerias
		if( content.imagenes && content.imagenes.length!=0){
			console.log(content.imagenes);
			for (var h=0; h<3; h++) {
				if(content.imagenes[h]){
					var galeria = content.imagenes[h]; 
					//codigo impresion galerias
						array_ima = $.parseJSON(content.imagenes[h].urls);
						html_galleryImages = '';
						$.each(array_ima, function (index, value) {
							html_galleryImages += '<div class="swiper-slide" style="background:url(http://procuraduriaapp.com/ws/galeria/uploads/'+value.img+');"></div>';
						});
						$('.content_'+content_to_load).append('<h2>'+galeria.nombre+'</h2>');
						$('.content_'+content_to_load).append('<div class="swiper-container sw'+galeria.id+'"><div class="swiper-wrapper">'+html_galleryImages);
						$('.content_'+content_to_load).append('</div><div class="swiper-pagination_'+galeria.id+'"></div><!--<div class="swiper-button-next animated"></div><div class="swiper-button-prev animated "></div>--></div>');
					    //setTimeout(function(){ 
					    	var swiper = new Swiper('.sw'+galeria.id, {
						        pagination: '.swiper-pagination_'+galeria.id,
						        paginationClickable: true,
						        spaceBetween: 30,
						        centeredSlides: true,
						        autoplay: 5000,
						        autoplayDisableOnInteraction: false,
						        slidesPerView: 1,
						        paginationClickable: true,
						        loop: true
						    });
					    //}, 500);
				    //Fin codigo impresion galerias
				}
			}
		}
		
		//Impresion de contenido
		if(content){
			$('.content_'+content_to_load).append(decode_utf8(content.content_html));
		}
		
		//Impresion de videos
		if(content.videos && content.videos.length!=0){
			if(content.videos.id=="1"){
				$('.content_'+content_to_load).append('<h2>La Procuradurí­a al aire</h2>');
				$('.content_'+content_to_load).append('<div id="video"></div>');
				setTimeout(function(){ loadLastVideos();}, 200);
			}
			else if(content.videos.id=="2"){
				$('.content_'+content_to_load).append('<h2>Mensajes institucionales de televisión, videos y mensaje radial</h2>');
				$('.content_'+content_to_load).append('<div id="comerciales"></div>');
				loadComerciales();	
			}else{
				$('.content_'+content_to_load).append('<h2>'+content.videos.titulo+'</h2>');
				$('.content_'+content_to_load).append('<div id="video"><iframe width="100%" height="350" src="'+content.videos.urls+'" frameborder="0" allowfullscreen></iframe></div>');
			}
		}
		
		//Impresion de documentos
		if(content.documentos && content.documentos.length!=0){
			if(content.documentos.tipo == "coleccionables"){
				$('.content_'+content_to_load).append('<h2>'+content.documentos.titulo+'</h2>');
				array_doc = jQuery.parseJSON(SES.arrayToDocuments);
				for (var k=0; k<array_doc.length; k++) {
					doc = array_doc[k];
					if(doc.tipo === "coleccionable"){
						var generate_html = '<div style="float:left;width:100%;">';
						var url_doc = 'http://procuraduriaapp.com/ws/documentos/'+doc.url;
						button_html =  '<div style="float:left;width:40px"><a href="#!" onclick="window.open(\''+url_doc+'\', \'_system\', \'location=no\');" target="_blank"><img src="assets/img/icon_col_azul.png" class="coleccionable_icon"></a></div>';
						button_html += '<div style="float:left;width:80%;"><a href="#!" onclick="window.open(\''+url_doc+'\', \'_system\', \'location=no\');" class="coleccionable_titulo">'+doc.titulo+'</a>';
						button_html += '<p class="coleccionable_descript">'+doc.descripcion+'</p></div>';
							generate_html += button_html;
							generate_html += '</div>';
						$('.content_'+content_to_load).append(generate_html);
					}
				}
			}				
			else{
				$('.content_'+content_to_load).append('<h2>'+content.documentos.nombre+'</h2>');
				$('.content_'+content_to_load).append('<p>'+content.documentos.descripcion+'</p>');
				var url_doc = 'http://procuraduriaapp.com/ws/documentos/'+content.documentos.url;
				button_html  = '<a href="'+content.documentos.url+'" target="_blank"><img src="assets/img/icon_col_azul.png" class="coleccionable_icon"></a>';
				button_html += '<a href="#!" onclick="window.open(\''+url_doc+'\', \'_system\', \'location=no\');" class="coleccionable_titulo">'+content.documentos.titulo+'</a>';
				$('.content_'+content_to_load).append(button_html);
			}
		}
		if(content.name==='tramites'){
			formulario_html = '<ul class="topics" ><li>Escríbanos<br /><div id="contact_form"><p class="error"></p><p class="success"></p><label>Nombre</label><input type="text" id="nombre" name="nombre"  ><label>Email</label><input type="text" id="email" name="email" ><label>Realice sus quejas o denuncias</label><textarea name="content" id="mensaje" ></textarea><hr ><button onclick="sendEmail();" class="send_button">Enviar</button></div></li></ul>';
			$('.content_'+content_to_load).append(formulario_html);
		}
	}else{
		console.log("sin contenido");
	}
	
}
function getContent(content_to_load){
	var content_html;
	array_cont = jQuery.parseJSON(SES.arrayToContents);
	for (var i=0; i<array_cont.length; i++) { 
		content = array_cont[i];
		if(content.name === content_to_load){
			return content;
		}
	}
}
