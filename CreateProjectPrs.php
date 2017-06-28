<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST'); 
$ProjectName = $_POST['ProjectName'];
$ProjectDescription = $_POST['ProjectDescription'];
$ProjectType = $_POST['ProjectType'];
$ProjectLeader = $_POST['ProjectLeader'];
$client = $_POST['client'];
$Budget = $_POST['Budget'];
$StartDate = $_POST['StartDate'];
$EndDate = $_POST['EndDate'];


$connection = mysqli_connect("localhost", "hbritton_test", "matrix1993", "hbritton_prs"); // Establishing Connection with Server..
 // Selecting Database

$query = "insert into projects(ProjectName, ProjectDescription, ProjectType, ProjectLeader, client, Budget, StartDate, EndDate, isFinished) values ('$ProjectName', '$ProjectDescription', '$ProjectType', '$ProjectLeader', '$client', '$Budget','$StartDate', '$EndDate', 'false')";

 //Insert Query
 
if( $connection->query($query) == true)
echo "Project Successfully Created";
else echo "error";

mysqli_close($connection); // Connection Closed


?>