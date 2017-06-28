<?php
 session_start();
header('Access-Control-Allow-Origin: *');

if(isset($_POST['TaskId']))
{
	$TaskName = $_POST['TaskId'];
	$_SESSION['TaskSelected'] = $TaskName;
	echo "session Created";
}
?>