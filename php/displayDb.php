<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-compatible" content="IE=edge"> 
<meta name="viewport" content="width=device-width, initalscale=1" >
<title>DB</title>
<link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
<script  src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="../bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
<?php
$conn = new mysqli('localhost','medha','','internship');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "SELECT * FROM users";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo " <br><b>First Name: </b>". $row["FirstName"]." ". $row["LastName"]. "<br> <b>Gender: </b> " . $row["Gender"] . "<br> <b>Username: </b>".$row["UserName"]."<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?> 
</div>
</body>
</html>