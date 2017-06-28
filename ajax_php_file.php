<?php
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST'); 
$connection = mysqli_connect("localhost", "hbritton_test", "matrix1993", "hbritton_prs");
if(isset($_SESSION['TaskSelected'])) {
$acTaskName = $_SESSION['TaskSelected'];
}
if(isset($_SESSION['ProjSelected'])) {
$acProjName = $_SESSION['ProjSelected'];
}
if(isset($_FILES["file"]["type"]))
{
$validextensions = array("jpeg", "jpg", "png");
$temporary = explode(".", $_FILES["file"]["name"]);
$file_extension = end($temporary);
if ((($_FILES["file"]["type"] == "image/png") || ($_FILES["file"]["type"] == "image/jpg") || ($_FILES["file"]["type"] == "image/jpeg")
) && ($_FILES["file"]["size"] < 5242880)
&& in_array($file_extension, $validextensions)) {
if ($_FILES["file"]["error"] > 0)
{
echo "Return Code: " . $_FILES["file"]["error"] . "<br/><br/>";
}
else
{
if (file_exists("upload/" . $_FILES["file"]["name"])) {
echo $_FILES["file"]["name"] . " already exists ";
}
else
{
$sourcePath = $_FILES['file']['tmp_name']; // Storing source path of the file in a variable
$targetPath = "upload/".$_FILES['file']['name']; // Target path where file is to be stored
move_uploaded_file($sourcePath,$targetPath) ; // Moving Uploaded file
echo "Image Uploaded Successfully...!!";
//echo "File Name: " . $_FILES["file"]["name"];
//echo "Type: " . $_FILES["file"]["type"];
//echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB";
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

 $sql = "UPDATE tasks SET isFinished='true', picurl='$targetPath' WHERE Taskid='$acTaskName'";
   
   if (mysqli_query($connection, $sql)) {
     // echo "Record updated successfully";
   } else {
      echo "Error updating record: " . mysqli_error($conn);
   }
$sql = "SELECT * FROM tasks where ProjectName = '$acProjName' and isFinished = 'false'";
$result = mysqli_query($connection, $sql);
if (mysqli_num_rows($result) > 0) {

} else {
    $sql = "UPDATE projects SET isFinished='true' WHERE Projectid='$acProjName'";
   
   if (mysqli_query($connection, $sql)) {
      //echo "Record updated successfully";
   } else {
      echo "Error updating record: " . mysqli_error($conn);
   }
}

mysqli_close($connection);

//echo "<b>Temp file:</b> " . $_FILES["file"]["tmp_name"] . "<br>";
}
}
}
else
{
echo "***Invalid file Size or Type***";
}
}
?>