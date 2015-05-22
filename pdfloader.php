<?php
header("Content-type:application/pdf");

// It will be called downloaded.pdf
header("Content-Disposition:attachment;filename='coleccionable_2.pdf'");

// The PDF source is in original.pdf
readfile("coleccionable_2.pdf");
?>

<html>
<body>
</body>
</html>	