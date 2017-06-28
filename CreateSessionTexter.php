<?php
 session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST'); 
$texter = " ";

if(isset($_POST['textpartner']))
{
	//echo "success";
	$texter = $_POST['textpartner'];
	$_SESSION['texter'] = $texter;
	//echo "session Created";
}


?>