<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST'); 
session_start();
$userid = $_SESSION['userid'];
$receivername = $_SESSION['texter'];
$conn = mysqli_connect("localhost", "hbritton_test", "matrix1993", "hbritton_prs");
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$sqll = "SELECT userid from users where username= '$receivername'";
$resultt = mysqli_query($conn, $sqll);
if (mysqli_num_rows($resultt) > 0) {
    // output data of each row
	//echo mysqli_num_rows($result);
    while($row = mysqli_fetch_assoc($resultt)) {
		$receiverid = $row["userid"];
	}
}
$sql = "SELECT * from message where senderid= '$userid' AND receiverid='$receiverid' OR senderid='$receiverid' AND receiverid='$userid' order by messagedate asc";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    // output data of each row
	//echo mysqli_num_rows($result);
    while($row = mysqli_fetch_assoc($result)) {
        //echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
		//echo "successfully logged in";
		
		              
						  
                        //  echo     "<br><p class='button' onclick='getOut()'>". $row["username"] . "</p></br>";
						    
                             if($userid == $row["senderid"])
							 {
		                    echo  "<div class='message message-sent'>".
							"<div class='message-name'>You</div>".
          "<div class='message-text'>". $row["messagetext"]."</div>".
          "<div class='message-label'>". $row["messagedate"]."</div>".
        "</div>";
							 }
							 
							 elseif ($userid == $row["receiverid"])
							 {
								echo "<div class='message message-received'>".
          "<div class='message-name'>".$receivername."</div>".
          "<div class='message-text'>". $row["messagetext"]."</div>".
		  "<div class='message-label'>". $row["messagedate"]."</div>".
        "</div>";
							 }
		
    }
	
} else {
    echo "No Messages";
}

mysqli_close($conn);

?>