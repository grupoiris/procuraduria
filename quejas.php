<?php
$para  = 'julian.montoya@grupoiris.co'; 
$título = 'Quejas o reclamos desde procuraduriaApp';

$mensaje = '
<html>
<head>
  <title>Quejas o reclamos desde procuraduriaApp</title>
</head>
<body style="max-width: 350px;margin:auto; text-align: center;font-family: sans-serif;">
	<img src="http://irisdev.co/procuraduria/assets/img/procuraduria.png" />
  	<div style="text-align: left; font-size: 20px;">
  		<div style="width:100%;float:left">
  			<b style="float:left;">Nombre</b><p style="float:left">'.$_GET["nombre"].'</p>
  		</div>
  		<div style="width:100%;float:left">
  			<b style="float:left">Email</b><p style="float:left">'.$_GET["email"].'</p>
  		</div>
  		<div style="width:100%;float:left">
  			<b style="float:left">Mensaje</b><p style="float:left">'.$_GET["mensaje"].'</p>
  		</div> 
	</div>
</body>
</html>
';
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$cabeceras .= 'From: procuraduriaApp<procuraduriaApp@procuraduriaapp.com>' . "\r\n";
// Enviarlo
$sended = mail($para, $título, $mensaje, $cabeceras);
echo $sended;
?>