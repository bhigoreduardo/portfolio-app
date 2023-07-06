<?php
  include '../../config.php';

  try {
    $query = "";
    if ($_POST['status'] == 1) {
      $query = "INSERT INTO receipts (customer, deadlineAt, paymentAt, amount, paymentMethod, status, obs) VALUES (:customer, :deadlineAt, :paymentAt, :amount, :paymentMethod, :status, :obs)";
    } else {
      $query = "INSERT INTO receipts (customer, deadlineAt, amount, paymentMethod, status, obs) VALUES (:customer, :deadlineAt, :amount, :paymentMethod, :status, :obs)";
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
    $preparedStatement->execute();

    http_response_code(201);
    echo json_encode(array('message'=>'Cadastro realizado com sucesso'));
  } catch (Exception $err) {
    echo json_encode(array('message'=>$err));
    // echo json_encode(array('message'=>'Falha no cadastro'));
  }
?>