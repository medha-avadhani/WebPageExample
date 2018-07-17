<?php
$conn = mysql_connect("localhost","medha","");
$db = mysql_select_db("internship",$conn);

$firstName = $_POST['fname'];
$lastName = $_POST['lname'];
$gender = $_POST['gender'];
$userName = $_POST['usrname'];
$password = $_POST['psswd'];
$sql = "INSERT into users values('".$firstName."','".$lastName."','".$gender."','".$userName."','".$password."')";
$query = mysql_query($sql);
if(!$query)
	echo "Failed".mysql_error();
else
	echo "Successfully Inserted!";
?>