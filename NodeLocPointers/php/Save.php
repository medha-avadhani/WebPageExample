<?php
$RR_no = $_POST['RR_no'];
$latitude = $_POST['lat'];
$longitude = $_POST['lon'];
if(!empty($RR_no) || !empty($latitude) || !empty($longitude)){
	 $host= "localhost";
	 $dbusername="medha";
	 $dbpassword="";
	 $dbname="locations";
	 $conn = new mysqli($host,$dbusername,$dbpassword,$dbname);
	 if (mysqli_connect_error()){		
		die('Connect Error('.mysqli_connect_error() .')'. mysqli_connect_error());
		
	}else{
		$sql = "INSERT INTO  marker (`RR_no`,`Latitude`,`Longitude`) VALUES('$RR_no',$latitude,$longitude)";
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