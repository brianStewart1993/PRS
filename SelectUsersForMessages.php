<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST'); 
session_start();
$userid = $_SESSION['userid'];
$conn = mysqli_connect("localhost", "hbritton_test", "matrix1993", "hbritton_prs");
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT username FROM users where Not userid = '$userid'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
	//echo mysqli_num_rows($result);
    while($row = mysqli_fetch_assoc($result)) {
        //echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
		//echo "successfully logged in";
		
		 
                        //  echo     "<br><p class='button' onclick='getOut()'>". $row["username"] . "</p></br>";
                             
		                  //  echo       "<br><input id='textbuddy' onclick='getOut()' class='button' type='button' value=".$row["username"] ."><br>";
							
							echo       "<br><option value=".$row["username"] ."> ". $row["username"]. "</option><br>";
		
    }
	
} else {
    echo "Error Occurred";
}

mysqli_close($conn);

?>