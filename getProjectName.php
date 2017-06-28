<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST'); 
//$company = $_POST['company'];
$conn = mysqli_connect("localhost", "hbritton_test", "matrix1993", "hbritton_prs");
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT ProjectName FROM projects";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
	//echo mysqli_num_rows($result);
    while($row = mysqli_fetch_assoc($result)) {
        
		
		echo "<br><option value='" . $row['ProjectName'] . "'>" . $row['ProjectName'] . "</option></br>";
    }
} else {
    echo "Error Occurred";
}

mysqli_close($conn);

?>