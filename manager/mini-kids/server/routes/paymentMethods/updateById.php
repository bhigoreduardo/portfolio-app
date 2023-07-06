<?php
  include '../../config.php';

  try {
    $query = "UPDATE paymentmethods SET name=:name, installments=:installments, fees=:fees, status=:status, obs=:obs
    WHERE id=:id";
    $pdo = FactoryConnection::getConnection();
    $preparedStatement = $pdo->prepare($query);

    $preparedStatement->bindParam(':name', $_POST['name']);
    $preparedStatement->bindParam(':installments', $_POST['installments']);
    $preparedStatement->bindParam(':fees', $_POST['fees']);
    $preparedStatement->bindParam(':status', $_POST['status']);
    $preparedStatement->bindParam(':obs', $_POST['obs']);
    $preparedStatement->bindParam(':id', $_POST['id']);
    $preparedStatement->execute();

    http_response_code(200);
    echo json_encode(array('message'=>'Atualizado com sucesso'));
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>'Falha na atualização'));
  }
?>