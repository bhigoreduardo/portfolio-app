<?php
  include '../../config.php';

  try {
    $query = "";
    if ($_POST['status'] == 1) {
      $query = "UPDATE receipts SET customer=:customer, deadlineAt=:deadlineAt, paymentAt=:paymentAt, amount=:amount, paymentMethod=:paymentMethod, status=:status, obs=:obs WHERE id=:id";
    } else {
      $query = "UPDATE receipts SET customer=:customer, deadlineAt=:deadlineAt, amount=:amount, paymentMethod=:paymentMethod, status=:status, obs=:obs WHERE id=:id";
    }
    $pdo = FactoryConnection::getConnection();
    $preparedStatement = $pdo->prepare($query);

    $preparedStatement->bindParam(':customer', $_POST['customer']);
    $preparedStatement->bindParam(':deadlineAt', $_POST['deadlineAt']);
    $preparedStatement->bindParam(':amount', $_POST['amount']);
    $preparedStatement->bindParam(':paymentMethod', $_POST['paymentMethod']);
    $preparedStatement->bindParam(':status', $_POST['status']);
    $preparedStatement->bindParam(':obs', $_POST['obs']);
    if ($_POST['status'] == 1) {
      $paymentAt = date("Y/m/d");
      $preparedStatement->bindParam(':paymentAt', $paymentAt);
    }
    $preparedStatement->bindParam(':id', $_POST['id']);
    $preparedStatement->execute();

    http_response_code(200);
    echo json_encode(array('message'=>'Atualizado com sucesso'));
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>'Falha na atualização'));
  }
?>