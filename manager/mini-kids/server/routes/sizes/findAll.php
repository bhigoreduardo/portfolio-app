<?php
  include '../../config.php';
  try {
    $query = "SELECT * FROM sizes WHERE status = 1";
    $pdo = FactoryConnection::getConnection();
    $preparedStatement = $pdo->prepare($query);

    $preparedStatement->execute();
    $resultSet = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);

    $response = new stdClass();
    $response->records = $resultSet;
    $response->count = count($resultSet);

    http_response_code(200);
    $json = json_encode($response);
    echo $json;      
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>'Falha na busca'));
  }
?>