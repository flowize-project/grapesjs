<?php
header('Content-Type: application/json', 200);

$rawData = file_get_contents("php://input");


echo json_encode($rawData);

?>