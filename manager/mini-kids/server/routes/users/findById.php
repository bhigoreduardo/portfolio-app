<?php
  include '../../config.php';
  try {
    $query = "SELECT * FROM users WHERE id=:id";
    $pdo = FactoryConnection::getConnection();
    $preparedStatement = $pdo->prepare($query);

    $id = $_GET['id'];
    $preparedStatement->bindParam(':id', $id);
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