<?php
$ID = $_POST['select'];
$comment = $_POST['comment'];
if(!empty($ID) || !empty($comment)){
	 $host= "localhost";
	 $dbusername="medha";
	 $dbpassword="";
	 $dbname="locations";
	 $conn = new mysqli($host,$dbusername,$dbpassword,$dbname);
	 if (mysqli_connect_error()){		
		die('Connect Error('.mysqli_connect_error() .')'. mysqli_connect_error());
		
	}else{
		$sql = "UPDATE marker SET Comment='$comment' WHERE ID=$ID";
		// echo "inside else";
		if($conn->query($sql)){
			echo "New record is inserted successfully";
		}else{
			echo "Error: ". $sql ."<br>". $conn->error;
		}
		$conn->close();
	}
}else{
	echo "Fields should not be empty";
}
?>