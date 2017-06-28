<?php
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST'); 
$userid = $_SESSION['userid'];
$receivername = $_SESSION['texter'];
if(isset($_POST['messagetext']))
$messagetext = $_POST['messagetext'];
//$messagetext = "message desc";

$connection = mysqli_connect("localhost", "hbritton_test", "matrix1993", "hbritton_prs"); // Establishing Connection with Server..
 // Selecting Database

 $sqll = "SELECT userid from users where username= '$receivername'";
$resultt = mysqli_query($connection, $sqll);
if (mysqli_num_rows($resultt) > 0) {
    // output data of each row
	//echo mysqli_num_rows($result);
    while($row = mysqli_fetch_assoc($resultt)) {
		$receiverid = $row["userid"];
	}
}
$query = "insert into message(senderid, receiverid, messagetext) values ('$userid', '$receiverid', '$messagetext')";

 //Insert Query
 
if( $connection->query($query) == true)
echo "Message Successfully Sent";
else echo "error";

mysqli_close($connection); // Connection Closed


?>