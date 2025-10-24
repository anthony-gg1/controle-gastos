<?php

header('Content-Type: application/json');

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $data = [
            [
                'id' => 1,
                'value' => 1450.39,
                'description' => 'Salário recebido',
                'date' => '2026-10-15',
            ],
            [
                'id' => 2,
                'value' => -100.00,
                'description' => 'Limpeza no carro',
                'date' => '2026-10-15',
            ],
            [
                'id' => 3,
                'value' => -250.75,
                'description' => 'Supermercado',
                'date' => '2026-10-16',
            ],
            [
                'id' => 4,
                'value' => -80.00,
                'description' => 'Conta de luz',
                'date' => '2026-10-17',
            ],
            [
                'id' => 5,
                'value' => -120.50,
                'description' => 'Conta de água',
                'date' => '2026-10-17',
            ],
            [
                'id' => 6,
                'value' => 500.00,
                'description' => 'Venda de produto usado',
                'date' => '2026-10-18',
            ],
            [
                'id' => 7,
                'value' => -60.00,
                'description' => 'Gasolina',
                'date' => '2026-10-18',
            ],
            [
                'id' => 8,
                'value' => -35.90,
                'description' => 'Almoço fora',
                'date' => '2026-10-19',
            ],
            [
                'id' => 9,
                'value' => 200.00,
                'description' => 'Freelance de design',
                'date' => '2026-10-20',
            ],
            [
                'id' => 10,
                'value' => -45.00,
                'description' => 'Assinatura de streaming',
                'date' => '2026-10-21',
            ],
        ];

        if (isset($_GET['id'])) {
            if ($_GET['id'] > 10 || $_GET['id'] < 1) {
                http_response_code(404);
                echo json_encode(["error"=>"id inexistente"]);
                die();
            }

            http_response_code(200);
            echo json_encode($data[$_GET['id']-1]);
            die();
        }
        
        http_response_code(200);
        echo json_encode($data);
        die();
        break;
    
    case 'POST':
        http_response_code(501);
        echo json_encode(['method' => 'POST']);
        break;

    case 'PUT':
        http_response_code(501);
        echo json_encode(['method' => 'PUT']);
        break;

    case 'DELETE':
        http_response_code(501);
        echo json_encode(['method' => 'DELETE']);
        break;

    default:
        http_response_code(501);
        echo json_encode(['error' => 'Método não implementado']);
        break;
}