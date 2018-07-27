<?php
$conn = new mysqli('localhost','medha','','locations');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "SELECT (RR_no),ID FROM marker";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
	echo '<select class="form-control" id="selectRR_no" name="select">';
    echo '<option>Select Node</option>';
	while($row = $result->fetch_assoc()) {
        echo '<option value="' . $row['ID'] . '">' . $row['RR_no'] . '</option>';
    }
    echo "</select>";
} else {
    echo "0 results";
}
$conn->close();

?> 
