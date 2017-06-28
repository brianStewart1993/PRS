<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST'); 
$ProjectName = $_POST['ProjectName'];
$TaskName = $_POST['TaskName'];
$StartTime = $_POST['StartTime'];
$EndTime = $_POST['EndTime'];
$Resources = $_POST['Resources'];


$connection = mysqli_connect("localhost", "hbritton_test", "matrix1993", "hbritton_prs"); // Establishing Connection with Server..

$sql = "SELECT Projectid FROM projects where ProjectName='$ProjectName'";
$result = mysqli_query($connection, $sql);

if (mysqli_num_rows($result) > 0) {
	 while($row = mysqli_fetch_assoc($result)) {
    
		$Projectid = $row["Projectid"];
	 }
}
else echo "error occured";

 
$query = "insert into tasks(TaskName, ProjectName, Projectid, StartTime, EndTime, Resources, isFinished) values ('$TaskName', '$ProjectName', '$Projectid', '$StartTime', '$EndTime', '$Resources', 'false')";

 //Insert Query
 
if( $connection->query($query) == true)
echo "Task Successfully Created";
else echo "error";

mysqli_close($connection); // Connection Closed


?>


