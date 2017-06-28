<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST'); 
define('SALT', 'wwhateveryouwant');
session_start();
$uname = $_POST['username'];
$pw = $_POST['password'];

$conn = mysqli_connect("localhost", "hbritton_test", "matrix1993", "hbritton_prs");
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$pwd = encrypt($pw);
$sql = "SELECT * FROM users where username ='$uname' And pwd = '$pwd'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
		$_SESSION['userid'] = $row["userid"];
        //echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
		//echo "successfully logged in";
		$company = $row["company"];
		if($company == "Employee")
		{
			echo "Employee";
		}
		else
			echo "Client";
		
    }
} else {
    echo "Login Unsuccessful";
}

mysqli_close($conn);

function encrypt($text) 
{ 
    return trim(base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256, SALT, $text, MCRYPT_MODE_ECB, mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_ECB), MCRYPT_RAND)))); 
} 
?>