<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST'); 
session_start();
$task = $_SESSION['TaskSelected'];
$conn = mysqli_connect("localhost", "hbritton_test", "matrix1993", "hbritton_prs");
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$sqll = "SELECT picurl from tasks where Taskid= '$task' AND isFinished='true'";
$resultt = mysqli_query($conn, $sqll);
if (mysqli_num_rows($resultt) > 0) {
    // output data of each row
	//echo mysqli_num_rows($result);
	 while($row = mysqli_fetch_assoc($resultt)) {
		 if($row["picurl"] == '')
		 {
			 echo "<center><h3>Task already completed however no picture was used to complete it.</h3></center>";
		 }
		 else
		 {
	echo "<center><h3>Task already completed see picture below </h3></center>";
	echo "<center><img src=".$row["picurl"]. " height='200px' weight='200px'></center>";
	 }
	 }
}

mysqli_close($conn);

?>