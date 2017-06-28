<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST'); 
session_start();
$task = $_SESSION['TaskSelected'];
$conn = mysqli_connect("localhost", "root", "", "prs");
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$sqll = "SELECT picurl from task where Taskid= '$task'";
$resultt = mysqli_query($conn, $sqll);
if (mysqli_num_rows($resultt) > 0) {
    // output data of each row
	//echo mysqli_num_rows($result);
	
	echo "<img src=".$row["picurl"]. "height='400px' weight='400px'>";
}

?>