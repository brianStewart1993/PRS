<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
session_start();
$task = $_SESSION['TaskSelected'];
$connection = mysqli_connect("localhost", "hbritton_test", "matrix1993", "hbritton_prs");
$query = "Update tasks set isFinished = 'true' where Taskid = '$task'";

 //Insert Query
 
if( $connection->query($query) == true)
echo "Task Successfully Completed";
else echo "error";

mysqli_close($connection); // Conn
?>