<?php
header("Access-Control-Allow-Origin: *");

$response = ["message" => "Hello, World!"];

echo json_encode($response);
