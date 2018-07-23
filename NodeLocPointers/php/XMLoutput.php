<?php

$username="medha";
$password="";
$database="locations";

$dom = new DOMDocument("1.0");
$node = $dom->createElement("markers");
$parnode = $dom->appendChild($node);

$connection=new mysqli('localhost',$username,$password,$database);

 if (mysqli_connect_error()){   
    die('Connect Error('.mysqli_connect_error() .')'. mysqli_connect_error());
    
  }

$query = "SELECT * FROM marker";
$result = $connection->query($query);
if (!$result) {
  die('Invalid query: ' . mysql_error());
}

header("Content-type: text/xml");

while ($row = $result->fetch_assoc()){

  $node = $dom->createElement("marker");
  $newnode = $parnode->appendChild($node);
  $newnode->setAttribute("ID",$row['ID']);
  $newnode->setAttribute("RR_no",$row['RR_no']);
  $newnode->setAttribute("Latitude", $row['Latitude']);
  $newnode->setAttribute("Longitude", $row['Longitude']);
  $newnode->setAttribute("state",$row['state']);
}

echo $dom->saveXML();

?>