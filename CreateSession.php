<?php
 session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST'); 
if(isset($_POST['ProjectId']))
{
	$ProjectName = $_POST['ProjectId'];
	$_SESSION['ProjSelected'] = $ProjectName;
	echo "session Created";
}
?>