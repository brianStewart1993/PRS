<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST'); 
define('SALT', 'wwhateveryouwant');

$uname = $_POST['username'];
$pw = $_POST['password'];
$email = $_POST['email'];
$userType = $_POST['userType'];

$connection = mysqli_connect("localhost", "hbritton_test", "matrix1993", "hbritton_prs"); // Establishing Connection with Server..
 // Selecting Database


$pwd = encrypt($pw);
$query = "insert into users(username, email, pwd, company) values ('$uname', '$email', '$pwd', '$userType')";

 //Insert Query
 
if( $connection->query($query) == true)
echo "Sign up Successful";
else echo "error";

mysqli_close($connection); // Connection Closed

function encrypt($text) 
{ 
    return trim(base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256, SALT, $text, MCRYPT_MODE_ECB, mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_ECB), MCRYPT_RAND)))); 
} 


?>