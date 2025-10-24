<?php

$EStatus = [
    "IN_PROGRESS",
    "FINISHED",
    "CANCELED"
];

header('Content-Type: application/json');

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $data = [
            [
                'id' => 1,
                'title' => 'Economizar',
                'description' => 'Economizar para comprar um carro',
                'value' => 1400.0,
                'expiration_date' => '2026-10-15',
                'status' => $EStatus[0]
            ],
            [
                'id' => 2,
                'title' => 'Não gastar',
                'description' => 'Juntar dinheiro para pagar a casa',
                'value' => 10500.0,
                'expiration_date' => '2028-06-01',
                'status' => $EStatus[2]
            ],
            [
                'id' => 3,
                'title' => 'Viajar',
                'description' => 'Guardar dinheiro para uma viagem internacional',
                'value' => 8000.0,
                'expiration_date' => '2027-12-20',
                'status' => $EStatus[0]
            ],
            [
                'id' => 4,
                'title' => 'Fundo de emergência',
                'description' => 'Criar um fundo de emergência para imprevistos',
                'value' => 5000.0,
                'expiration_date' => '2026-04-01',
                'status' => $EStatus[1]
            ],
            [
                'id' => 5,
                'title' => 'Novo computador',
                'description' => 'Guardar dinheiro para um novo notebook',
                'value' => 3500.0,
                'expiration_date' => '2025-12-10',
                'status' => $EStatus[0]
            ],
            [
                'id' => 6,
                'title' => 'Casamento',
                'description' => 'Juntar dinheiro para a festa de casamento',
                'value' => 20000.0,
                'expiration_date' => '2029-05-15',
                'status' => $EStatus[0]
            ],
            [
                'id' => 7,
                'title' => 'Aposentadoria',
                'description' => 'Investir para garantir a aposentadoria',
                'value' => 100000.0,
                'expiration_date' => '2045-01-01',
                'status' => $EStatus[0]
            ],
            [
                'id' => 8,
                'title' => 'Curso de especialização',
                'description' => 'Economizar para pagar um curso de pós-graduação',
                'value' => 7000.0,
                'expiration_date' => '2027-02-10',
                'status' => $EStatus[1]
            ],
            [
                'id' => 9,
                'title' => 'Reforma da casa',
                'description' => 'Guardar dinheiro para reformar a cozinha e o banheiro',
                'value' => 15000.0,
                'expiration_date' => '2028-11-25',
                'status' => $EStatus[0]
            ],
            [
                'id' => 10,
                'title' => 'Doação anual',
                'description' => 'Reservar parte da renda anual para doações',
                'value' => 1200.0,
                'expiration_date' => '2025-12-31',
                'status' => $EStatus[1]
            ]
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