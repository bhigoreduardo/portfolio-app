<?php
  include '../../config.php';

  try {
      $query = "INSERT INTO paymentmethods (name, installments, fees, status, obs)
      VALUES (:name, :installments, :fees, :status, :obs)";
      $pdo = FactoryConnection::getConnection();
      $preparedStatement = $pdo->prepare($query);

      $preparedStatement->bindParam(':name', $_POST['name']);
      $preparedStatement->bindParam(':installments', $_POST['installments']);
      $preparedStatement->bindParam(':fees', $_POST['fees']);
      $preparedStatement->bindParam(':status', $_POST['status']);
      $preparedStatement->bindParam(':obs', $_POST['obs']);
      $preparedStatement->execute();

      http_response_code(201);
      echo json_encode(array('message'=>'Cadastro realizado com sucesso'));
  } catch (Exception $err) {
      echo json_encode(array('message'=>'Falha no cadastro'));
  }
?>