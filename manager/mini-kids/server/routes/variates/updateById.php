<?php
  include '../../config.php';

  try {
    $query = "UPDATE variates SET color=:color, size=:size, coast=:coast, sale=:sale, discount=:discount, stockMin=:stockMin, stock=:stock, status=:status
    WHERE id=:id";
    $pdo = FactoryConnection::getConnection();
    $preparedStatement = $pdo->prepare($query);

    $preparedStatement->bindParam(":color", $_POST["color"]);
    $preparedStatement->bindParam(":size", $_POST["size"]);
    $preparedStatement->bindParam(":coast", $_POST["coast"]);
    $preparedStatement->bindParam(":sale", $_POST["sale"]);
    $preparedStatement->bindParam(":discount", $_POST["discount"]);
    $preparedStatement->bindParam(":stockMin", $_POST["stockMin"]);
    $preparedStatement->bindParam(":stock", $_POST["stock"]);
    $preparedStatement->bindParam(":status", $_POST["status"]);
    $preparedStatement->bindParam(':id', $_POST['id']);
    $preparedStatement->execute();

    http_response_code(200);
    echo json_encode(array('message'=>'Atualizado com sucesso'));
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>'Falha na atualização'));
  }
?>