<?php

header("Content-Type: application/json");

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $data = [ "user" => [
            "name" => "Alvaro",
            "cpf" => "12345678900",
            "email" => "alvaro@email.com",
            "tel" => "11222334444",
            "profile_image" => "/uploads/profile.img"
        ]];

        http_response_code(200);
        echo json_encode($data);
        break;
    
    case 'PUT':
        http_response_code(501);
        echo json_encode(["error" => "MÉTODO PUT"]);
        break;

    default:
        http_response_code(501);
        echo json_encode(["error" => "metodo não implementado"]);
        break;
}