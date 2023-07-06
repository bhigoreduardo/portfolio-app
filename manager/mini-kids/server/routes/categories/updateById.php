<?php
  include '../../config.php';

  try {
    $query = "UPDATE categories SET name=:name, status=:status, obs=:obs
    WHERE id=:id";
    $pdo = FactoryConnection::getConnection();
    $preparedStatement = $pdo->prepare($query);

    $name = $_POST['name'];
    $status = $_POST['status'];
    $obs = $_POST['obs'];
    $id = $_POST['id'];
    $preparedStatement->bindParam(':name', $name);
    $preparedStatement->bindParam(':status', $status);
    $preparedStatement->bindParam(':obs', $obs);
    $preparedStatement->bindParam(':id', $id);
    $preparedStatement->execute();

    http_response_code(200);
    echo json_encode(array('message'=>'Atualizado com sucesso'));
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>'Falha na atualização'));
  }
?>