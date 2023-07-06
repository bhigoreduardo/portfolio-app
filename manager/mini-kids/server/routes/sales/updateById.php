<?php
  include '../../config.php';

  try {
    $query = "UPDATE sales SET paymentMethod=:paymentMethod, amountPayment=:amountPayment, status=:status, obs=:obs
    WHERE id=:id";
    $pdo = FactoryConnection::getConnection();
    $preparedStatement = $pdo->prepare($query);

    $preparedStatement->bindParam(":paymentMethod", $_POST["paymentMethod"]);
    $preparedStatement->bindParam(":amountPayment", $_POST["amountPayment"]);
    $preparedStatement->bindParam(":status", $_POST["status"]);
    $preparedStatement->bindParam(":obs", $_POST["obs"]);
    $preparedStatement->bindParam(':id', $_POST['id']);
    $preparedStatement->execute();

    http_response_code(200);
    echo json_encode(array('message'=>'Atualizado com sucesso'));
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>'Falha na atualização'));
  }
?>