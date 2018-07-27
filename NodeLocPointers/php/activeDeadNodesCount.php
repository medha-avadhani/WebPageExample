<?php
$conn = new mysqli('localhost','medha','','locations');
if($conn->connect_error){
    die("Connection failed:". $conn->connect_error);
}
$sql1 = "SELECT COUNT(*) FROM marker WHERE State = 0";
$result1 = $conn->query($sql1);
$row1=mysqli_fetch_array($result1);
$sql2 = "SELECT COUNT(*) FROM marker WHERE State = 1";
$result2 = $conn->query($sql2);
$row2=mysqli_fetch_array($result2);

echo "<h4><b>Active nodes:" .$row2[0] . "</b></h4>";
echo "<h4><b>Dead nodes:" .$row1[0] . "</b></h4>";
?>