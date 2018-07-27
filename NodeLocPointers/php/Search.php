<?php
$RR_no = $_POST['search'];

$username="medha";
$password="";
$database="locations";
$connection=new mysqli('localhost',$username,$password,$database);

 if (mysqli_connect_error()){   
    die('Connect Error('.mysqli_connect_error() .')'. mysqli_connect_error());
    
  }

$query = "SELECT * FROM marker WHERE RR_no ='$RR_no'";
$result = $connection->query($query);
if (!$result) {
  die('Invalid query: '. mysql_error());
}

$jsonArray = array();
if($result->num_rows>0){
	while ($row = $result->fetch_assoc()){
  		$jsonArray[] = $row;
	}

	echo json_encode($jsonArray);
}
else{
	echo "No such node found!";
}
?>