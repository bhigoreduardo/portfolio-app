<?php
  include '../../config.php';
  try {
    $query = "SELECT * FROM system";
    $pdo = FactoryConnection::getConnection();
    $preparedStatement = $pdo->prepare($query);

    $preparedStatement->execute();
    $resultSet = $preparedStatement->fetch(PDO::FETCH_ASSOC);
    $json = json_encode($resultSet);

    http_response_code(200);
    echo $json;
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>'Falha na busca'));
  }
?>