<?php
	date_default_timezone_set("America/Sao_Paulo"); 
	$file = "log.txt";
	$str = "Entrei na função de email na hora: " . date('h:i:s A') . "\n";
	$handle = fopen($file, "a+");
	$write = fwrite($handle, $str);
	echo file_get_contents($file);
?>