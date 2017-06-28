<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST'); 
$connection = mysqli_connect("localhost", "root", "", "prs");
$image = addslashes(file_get_contents($_FILES['fileToUpload']['tmp_name'])); //SQL Injection defence!
$image_name = addslashes($_FILES['fileToUpload']['name']);
$sql = "INSERT INTO `pictest` (`picid`, `pic`) VALUES ('1', '{$image}')";
if (!mysqli_query($connection, $sql)) { // Error handling
    echo mysqli_error($connection); 
}

else
{
	echo "Picture Successfully Uploaded";
}

?>