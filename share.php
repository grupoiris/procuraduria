<!DOCTYPE html>
<html lang="es">
	<head>
	<title>Usted tiene que ver, Participe</title>
		<meta property="og:type" content="website" />
	<?php 
		if(isset($_GET["type"])){
			echo '<meta name="title" content="JW Player 5.1 Just Released!" />';
			echo '<meta property="description" content="A description to be used in the share dialog." />';
			echo '<meta property="og:description" content="A description to be used in the share dialog." />';
		}
		else{
			var_dump($_GET);
		}
	?>
	</head>
	<body>
	</body>
</html>