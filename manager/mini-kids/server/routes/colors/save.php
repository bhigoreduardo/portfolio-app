<?php
  include '../../config.php';

  try {
      $query = "INSERT INTO colors (name, hex, status, obs)
      VALUES (:name, :hex, :status, :obs)";
      $pdo = FactoryConnection::getConnection();
      $preparedStatement = $pdo->prepare($query);

      $name = $_POST['name'];
      $hex = $_POST['hex'];
      $status = $_POST['status'];
      $obs = $_POST['obs'];
      $preparedStatement->bindParam(':name', $name);
      $preparedStatement->bindParam(':hex', $hex);
      $preparedStatement->bindParam(':status', $status);
      $preparedStatement->bindParam(':obs', $obs);
      $preparedStatement->execute();

      http_response_code(201);
      echo json_encode(array('message'=>'Cadastro realizado com sucesso'));
  } catch (Exception $err) {
      echo json_encode(array('message'=>'Falha no cadastro'));
  }
?>