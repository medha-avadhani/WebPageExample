<?php

$userName = $_POST['name'];
$password = $_POST['psswd'];

$conn = new mysqli('localhost','medha','','internship');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "SELECT FirstName,LastName FROM users WHERE UserName='$userName' AND Password='$password'";
$result = $conn->query($sql);
if($result->num_rows == 1){
     $_SESSION['userName'] = $userName;
}else {
      echo "Your Login Name or Password is invalid";
}
if(isset($_SESSION['userName'])){
    $session = true;
    echo $session;
}else{
    $session = false;
    echo $session;
}

?>