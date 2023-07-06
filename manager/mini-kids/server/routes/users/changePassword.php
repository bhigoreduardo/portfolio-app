<?php
  include '../../config.php';

  try {
    $query = "SELECT * FROM users WHERE username=:username AND password=:password";
    $pdo = FactoryConnection::getConnection();
    $preparedStatement = $pdo->prepare($query);

    $preparedStatement->bindParam(':username', $_POST['username']);
    $preparedStatement->bindParam(':password', $_POST['password']);
    $preparedStatement->execute();
    $resultSet = $preparedStatement->fetch(PDO::FETCH_ASSOC);

    $query = "UPDATE users SET password=:newPassword WHERE username=:username";
    $pdo = FactoryConnection::getConnection();
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->bindParam(":username", $_POST['username']);
    $preparedStatement->bindParam(":newPassword", $_POST["newPassword"]);
    $preparedStatement->execute();
    http_response_code(200);
    echo json_encode(array('message'=>'Atualizado com sucesso'));

    // if ($resultSet->username) {
     
    // } else {
    //   http_response_code(500);
    //   echo json_encode(array('message'=>'Falha na atualização'));
    // }
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>$err));
    echo json_encode(array('message'=>'Falha na atualização'));
  }
?>