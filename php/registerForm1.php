<?php

$firstName = $_POST['fname'];
$lastName = $_POST['lname'];
$gender = $_POST['gender'];
$userName = $_POST['usrname'];
$password = $_POST['psswd'];
 if(!empty($firstName) || !empty($lastName) || !empty($gender) || !empty($userName) || !empty($password)){
	 $host= "localhost";
	 $dbusername="medha";
	 $dbpassword="";
	 $dbname="internship";
	 
	 $conn = new mysqli($host,$dbusername,$dbpassword,$dbname);
	 // echo "db con";
	 
		if (mysqli_connect_error()){		
			die('Connect Error('.mysqli_connect_error() .')'. mysqli_connect_error());
		
		}
		else{
			$sql = "INSERT INTO  Users VALUES('$firstName','$lastName','$gender','$userName','$password')";
				// echo "inside else";
			if($conn->query($sql)){
				echo "New record is inserted successfully";
			}
			else{
				echo "Error: ". $sql ."<br>". $conn->error;
			}
			$conn->close();
		}
	}
	else{
		echo "Fields should not be empty";
		die();
	}
?> 