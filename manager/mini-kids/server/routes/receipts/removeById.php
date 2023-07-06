<?php
  include '../../config.php';
  try {
    $query = "DELETE FROM receipts WHERE id=:id";
    $pdo = FactoryConnection::getConnection();
    $preparedStatement = $pdo->prepare($query);

    $id = $_GET['id'];
    $preparedStatement->bindParam('id', $id);
    $preparedStatement->execute();

    http_response_code(200);
    echo json_encode(array('message'=>'Removido com sucesso'));
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>'Falha na remoção'));
  }
?>