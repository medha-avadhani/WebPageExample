<?php
$conn = new mysqli('localhost','medha','','locations');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "SELECT * FROM marker";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
	echo '<table border="2px solid black;" style="width:100%"><tr><th>RR Number</th>
                 <th>Latitude</th>
                 <th>Longitude</th>
               </tr>';
	while($row = $result->fetch_assoc()) {
        echo " <tr>
        		<td>". $row["RR_no"].
        		"</td><td>" . $row["Latitude"] . 
        		"</td><td>".$row["Longitude"].
        		"</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}
$conn->close();

?> 
