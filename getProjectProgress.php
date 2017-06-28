<?php
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST'); 
$ProjectName = $_POST['ProjectName'];
if(isset($_SESSION['ProjSelected'])) {
$acProjName = $_SESSION['ProjSelected'];
}
else echo "Session Error";
$conn = mysqli_connect("localhost", "hbritton_test", "matrix1993", "hbritton_prs");
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT * FROM tasks where Projectid = '$acProjName'";
$sql2 = "SELECT * FROM tasks where Projectid = '$acProjName' AND isFinished= 'true'";
$result = mysqli_query($conn, $sql);
$result2 = mysqli_query($conn, $sql2);

if (mysqli_num_rows($result) > 0 AND mysqli_num_rows($result2) > 0 ) {
    // output data of each row
$tot = 0;
$completed = 0;
$percentage = 0;   
  $tot = mysqli_num_rows($result);
  $completed = mysqli_num_rows($result2);
  $percentage = $completed / $tot * 100;
  echo $percentage .'%';
  
}
   else echo "0%";

mysqli_close($conn);

?>