<?php

include "config.php";
$return_arr = array();
$po = "billal";

$query = "SELECT * FROM users WHERE name='{$po}' ORDER BY NAME";

$result = mysqli_query($con,$query);

while($row = mysqli_fetch_array($result)){
    $id = $row['id'];
    $username = $row['username'];
    $name = $row['name'];
    $email = $row['email'];

    $return_arr[] = array("id" => $id,
                    "username" => $username,
                    "name" => $name,
                    "email" => $email);
}

// Encoding array in JSON format
echo json_encode($return_arr);