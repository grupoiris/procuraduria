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
	          //console.log(output);
	      }
	});  
	/*Emulate Array to content*/
	/*var contenido = {name:"tramites",title:'Trámites', content_html:'<ul class="topics"><li>Obtenga el certificado de antecedentes <br /><a href="#" onclick="window.open(\'http://www.procuraduria.gov.co/portal/antecedentes.html\', \'_system\', \'location=no\');" >Certificado de antecedentes</a></li><li>Consulta de procesos disciplinarios <br /><a href="#" onclick="window.open(\'http://www.procuraduria.gov.co/portal/index.jsp?option=co.gov.pgn.portal.frontend.component.pagefactory.Correspondencia1ComponentPageFactory\',\'_system\');" >Procesos disciplinarios</a></li><li>Realice sus quejas o denuncias<br /><a href="#" onclick="window.open(\'http://www.procuraduria.gov.co/portal/index.jsp?option=co.gov.pgn.portal.frontend.component.pagefactory.QuejasDenunciasComponentPageFactory\',\'_system\');" >Quejas y/o denuncias</a>  </li></ul>' };
	arrayToContents.push(contenido);
	var contenido = {name:"en_accion",title:'¡La Procuraduría en acción!', content_html:'<ul class="topics"><li> <h2>Visita del procurador a España</h2> <p>El procurador viajó a España para encontrarse con los colombianos residentes en ese país.</p><img src="assets/img/procurador_espa.jpg" onclick="openPS(\'procurador_espa.jpg\');"> <p>"Estar fuera del país no los excluye de las políticas públicas que benefician a todos los colombianos": procurador Alejandro Ordóñez a los ciudadanos en España.</p></li><li> <h2>La Procuraduría al aire</h2> <div id="video"></div></li><li style="float: left;"> <h2> Nuestra revista​</h2> <p>¡Descarga nuestra revista! Descubre más sobre el trabajo que hay detrás del día a día del procurador y todo un equipo transparente y dedicado que vela por el cumplimiento de las promesas de sus ciudadanos. Representando a la sociedad colombiana y protegiendo sus derechos, incluyendo el derecho a una Colombia en pa​z.​</p><!--<a href="#!" onclick="window.open(\'https://irisdev.co/procuraduria/revista.pdf\', \'_system\');" class="image_link_download" target="_blank"><img src="assets/img/icon_col_azul.png" class="coleccionable_icon"></a><a href="#!" onclick="window.open(\'https://irisdev.co/procuraduria/revista.pdf\', \'_system\');"" class="coleccionable_titulo"> Procurando, Un ¨Pacto para la paz¨, la propuesta de la Procuraduría. </a>--> <a href="#!" onclick="window.open(\'https://docs.google.com/viewer?url=https://irisdev.co/procuraduria/revista.pdf\', \'_blank\', \'location=yes\');" class="image_link_download" target="_blank"><img src="assets/img/icon_col_azul.png" class="coleccionable_icon"></a><a href="#!" onclick="window.open(\'https://docs.google.com/viewer?url=https://irisdev.co/procuraduria/revista.pdf\', \'_blank\', \'location=yes\');" class="coleccionable_titulo"> Procurando, Un ¨Pacto para la paz¨, la propuesta de la Procuraduría. </a><a href="#!" onclick=\'window.open("https://docs.google.com/viewer?url=https://irisdev.co/procuraduria/revista.pdf\', \'_blank\', \'location=yes\');" class="link_download"> Descargar </a><br/> </li><br/> <li> <h2>Galería de imágenes</h2> <div class="swiper-container sw2" > </div></li></ul>' };
	arrayToContents.push(contenido);
	var contenido = {name:"participe",title:'Usted tiene qué ver, participe', content_html:'<p>Con el apoyo de la <b>Procuraduría General de la Nación</b> se fortalece y garantiza el derecho a la participación ciudadana. Si participamos, prevenimos la corrupción y todos ganamos. De este criterio surge la estrategia <span>USTED TIENE QUÉ VER: PARTICIPE</span>, proyecto liderado por la Procuraduría General de la Nación que busca generar una alianza entre los servidores públicos y la ciudadanía, para que los mecanismos de participación ciudadana se conviertan en una forma efectiva de control de lo público. Cuando se previenen hechos que puedan afectar el correcto ejercicio de la administración pública, se reduce la distancia entre los ciudadanos y los servidores públicos y se disminuye el riesgo de corrupción.</p><h2>Mensajes institucionales de televisión, videos y mensaje radial</h2><div id="comerciales"></div><h2>¿QUIERES DESCARGAR NUESTROS COLECCIONABLES?</h2><ul class="coleccionables"></ul>' };
	arrayToContents.push(contenido);
	var contenido = {name:"prevencion",title:'La prevención es mejor que la sanción</div>', content_html:'<p>La Procuraduría General de la Nación, tiene como principio rector la lucha contra la corrupción y la impunidad, que se hace efectiva con el trabajo de los servidores públicos. </p><p>Es necesario tener en cuenta que para que la sociedad funcione bien, de manera equilibrada y democrática se requiere contar con órganos de control. Por esta razón, el Ministerio Público y la Contraloría General de la República se constituyen como órganos de control. Al Ministerio Público le corresponde:</p><ul class="topics"> <li>La guarda y promoción de los derechos humanos.</li><li>La protección del interés público.</li><li>La vigilancia de la conducta oficial de quienes desempeñan funciones públicas.</li></ul><p>Para que la sociedad colombiana funcione de manera equilibrada y dentro del Plan Estratégico Institucional “Orden y Rectitud”, la Procuraduría General de la Nación estableció su Misión y Visión, orientadas al efectivo cumplimiento de sus funciones.</p><h2>Misión</h2><p>Vigilar el cumplimiento de la Constitución, las leyes, las decisiones judiciales y los actos administrativos; promover y proteger los derechos humanos; defender el interés público y vigilar la conducta oficial de quienes desempeñan funciones públicas; objetivos estos que se logran a través de actuaciones preventivas, de intervención judicial y administrativa y procesos disciplinarios; siendo referentes de eficacia y valoración ética en el ejercicio de la función pública.</p><h2>Visión</h2> <p>Una Procuraduría cercana al ciudadano, que protege sus derechos, combate la corrupción y la impunidad, vigila y controla la función de los servidores públicos; en aras de eliminar las causas que dan origen a las actuaciones administrativas improcedentes</p>' };
	arrayToContents.push(contenido);
	var contenido = {name:"funciones",title:'Funciones de la Procuraduría General de la Nación', content_html:'<span class="subtitle">Preventiva:</span> <p style="background: #ddb354; padding: 5px;color:#fff">Está orientada a anticipar y evitar la ocurrencia de hechos que afecten los derechos de las personas, mediante la detección y advertencia temprana de riesgos en la Gestión Pública. Promueve además el respeto de las garantías de los derechos constitucionales.</p><span class="subtitle">Disciplinaria:</span> <p style="background: #619f81; padding: 5px;color:#fff">Tiene como propósito iniciar, adelantar y fallar las investigaciones disciplinarias que se lleven a cabo contra servidores públicos y particulares que ejercen funciones públicas o manejan dineros del Estado.</p><span class="subtitle">Conciliación:</span> <p style="background: #b9383d; padding: 5px;color:#fff">Promueve la solución de conflictos a través de mecanismos tales como la mediación, la amigable composición, el arbitraje y la conciliación. Es requisito de procedibilidad antes de acudir a las diferentes jurisdicciones, incluida la de lo Contencioso Administrativo. Para este último caso, la Procuraduría es la única instancia que realiza la conciliación.</p><span class="subtitle">Intervención:</span> <p style="background: #AA9CCF; padding: 5px;color:#fff">Interviene de manera selectiva como sujeto procesal, en defensa de los derechos y las garantías fundamentales, ante la Jurisdicción Contencioso Administrativa y Constitucional, así como en las instancias de la Jurisdicción Penal, Penal Militar, Civil, Ambiental y Agraria; de familia y laboral, al igual que ante el Consejo Superior de la Judicatura y las autoridades administrativas y de policía.</p>' };
	arrayToContents.push(contenido);
	var contenido = {name:"preventiva",title:'Modelo de la función preventiva de la Procuraduría General de la Nación', content_html:'<p>Para garantizar su cumplimiento la entidad estableció, mediante la resolución 132 de 2014, un nuevo enfoque, principios y lineamientos que permiten el ejercicio de la función preventiva. Es muy importante tener en cuenta que las funciones misionales que ejerce la <b>Procuraduría General de la Nación</b> incorporan elementos preventivos para garantizar los derechos de los ciudadanos. La función preventiva busca anticiparse y evitar la ocurrencia de hechos, que afecten los derechos.</p><p>Está orientada a anticipar y evitar la ocurrencia de hechos que afecten los derechos de las personas, mediante la detección y advertencia temprana de riesgos en la Gestión Pública. Promueve además el respeto de las garantías de los derechos constitucionales.</p>' };
	arrayToContents.push(contenido);
	var contenido = {name:"lineamientos",title:'Lineamientos de la función preventiva', content_html:'<img onclick="openPS(\'grafica-lineamientos.png\');" src="assets/img/grafica-lineamientos.png"><br><br><p><span class="subtitle">Focalización en la garantía de los derechos.</span><br>Se concentra en asegurar que se respeten los derechos de las personas.</p><p><span class="subtitle">Sólida capacidad anticipatoria.</span><br>Se enfoca en la actuación planeada que identifica y valora los riesgos para adoptar medidas que impidan que estos se materialicen, trascendiendo la acción reactiva.</p><p><span class="subtitle">Énfasis en la vigilancia y control del cumplimiento de las Políticas Públicas.</span><br>Se proyecta hacia el mejoramiento continuo de la administración estatal en términos de pertinencia, economía, eficiencia y eficacia de las Políticas Públicas.</p><p><span class="subtitle">Generación de valor en el sector público.</span><br>Se orienta hacia la contribución del éxito de la función pública.</p><p><span class="subtitle">Gestión y análisis de la información.</span><br>Se encamina a la generación y análisis de información de la Gestión Pública con el propósito de valorar anticipadamente los riesgos que puedan afectar su cumplimiento.</p>' };
	arrayToContents.push(contenido);
	var contenido = {name:"escenarios",title:'Escenarios y tipos de actuación del modelo de gestión de la función preventiva', content_html:'<p>Los escenarios y tipos de actuación explican cómo se debe actuar preventivamente en la Procuraduría General de la Nación frente a las diferentes situaciones que se pueden presentar en la Gestión Pública.</p><img onclick="openPS("grafica-escenarios-y-tipos-de-actuacion.png");" src="assets/img/grafica-escenarios-y-tipos-de-actuacion.png"><br><br><h3>Quiénes tienen qué ver con el modelo de gestión de la función preventiva</h3> <img onclick="openPS("grafica-quienes-tienen-que-ver.png");" src="assets/img/grafica-quienes-tienen-que-ver.png"><br><br>' };
	arrayToContents.push(contenido);
	var contenido = {name:"participacion",title:'La participación ciudadana y la función preventiva', content_html:'<p>La participación es eje de la democracia y la garantía de hacer parte de las decisiones que nos afectan. Sin participación no es posible la democracia.</p><p>El propósito de la política de participación de la <b>Procuraduría General de la Nación</b> es institucionalizar la relación con los actores sociales con el fin de convertir su conocimiento y experiencia en insumo básico del Sistema Integral de Prevención.</p><img onclick="openPS("grafica-participacion-ciudadana.png");" src="assets/img/grafica-participacion-ciudadana.png"><br><br><h3>Porque todos tenemos qué ver, recuerde: </h3> <ul class="topics"> <li>La Procuraduría General de la Nación apoya y garantiza el derecho a la participación ciudadana.</li><li>La participación ciudadana fortalece la función preventiva de la Procuraduría General de la Nación.</li><li>El apoyo a la participación ciudadana se enmarca en la función preventiva de la Procuraduría General de la Nación.</li><li>Ciudadanos e instituciones participan de manera conjunta para fortalecer la Gestión Pública.</li><li>Los ciudadanos tienen derecho a acceder a información veraz y oportuna para la vigilancia de la Gestión Pública.</li></ul> <h3>OBJETIVOS</h3> <ul class="topics"><li><b style="color:#008ED4;">Articular</b><br/>Las acciones de las dependecias de la entidad en torno a los mecanismos y a las instancias de participación y control social.</li><li><b style="color:#008ED4;">Fortalecer</b><br/>Las capacidades de la ciudadanía y sus organizaciones y las herramientas de control social en la Gestión Pública.</li><li><b style="color:#008ED4;">Integrar</b><br/>Las acciones preventivas de la entidad con los mecanismos de participación ciudadana y control social; las organizaciones sociales, la ciudadanía y la administración pública.</li></ul>' };
	arrayToContents.push(contenido);*/
	
	
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
		$('#comerciales').append('<div  class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="'+arrayComerciales[i]+'"></iframe>  </div> ');
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
            var results;
            $.each( data.items, function( i, item ) {
            	results = '<div  class="embed-responsive embed-responsive-16by9">   <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/'+item.snippet.resourceId.videoId+'?rel=0"></iframe>';
                $('#video').append(results);
            });
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
			html_galeria += '<div class="swiper-slide" style="background:url(http://procuraduriaapp.com/ws/galeria/interna/'+arrayGalleryInterna[i]+');"></div>';
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
function loadContent(content_to_load){
	$('.content_'+content_to_load).html("cargando..");
	if(content_to_load){
		content_html = getContent(content_to_load);
		if(content_html){
			$('.content_'+content_to_load).html(content_html);
		}
	}else{
		console.log("sin contenido");
	}
	if(content_to_load==='en_accion'){
		loadComerciales();
		//loadVideos();
		loadLastVideos();
		loadGaleriaInterna();
	}
	if(content_to_load==='participe'){
		$('#comerciales').html("");
		loadComerciales();
		loadColeccionables();
	}
	if(content_to_load==='tramites'){
		formulario_html = '<ul class="topics" ><li>Escríbanos<br /><div id="contact_form"><p class="error"></p><p class="success"></p><label>Nombre</label><input type="text" id="nombre" name="nombre"  ><label>Email</label><input type="text" id="email" name="email" ><label>Realice sus quejas o denuncias</label><textarea name="content" id="mensaje" ></textarea><hr ><button onclick="sendEmail();" class="send_button">Enviar</button></div></li></ul>';
		$('.content_'+content_to_load).append(formulario_html);
	}
	
}
function getContent(content_to_load){
	var content_html;
	for (var i=0; i<arrayToContents.length; i++) { 
		content = arrayToContents[i];
		if(content.name === content_to_load){
			content_html = content.content_html;
		}
	}
	return content_html;
}
