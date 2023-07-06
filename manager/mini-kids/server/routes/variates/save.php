<?php
  include '../../config.php';

  try {
    $query = "INSERT INTO variates (color, size, coast, sale, discount, stockMin, stock, product, status)
    VALUES (:color, :size, :coast, :sale, :discount, :stockMin, :stock, :product, :status)";

    $pdo = FactoryConnection::getConnection();
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->bindParam(":color", $_POST["color"]);
    $preparedStatement->bindParam(":size", $_POST["size"]);
    $preparedStatement->bindParam(":coast", $_POST["coast"]);
    $preparedStatement->bindParam(":sale", $_POST["sale"]);
    $preparedStatement->bindParam(":discount", $_POST["discount"]);
    $preparedStatement->bindParam(":stockMin", $_POST["stockMin"]);
    $preparedStatement->bindParam(":stock", $_POST["stock"]);
    $preparedStatement->bindParam(":product", $_POST["product"]);
    $preparedStatement->bindParam(":status", $_POST["status"]);
    $preparedStatement->execute();

    http_response_code(201);
    echo json_encode(array('message'=>'Cadastro realizado com sucesso'));
  } catch (Exception $err) {
      http_response_code(500);
      echo json_encode(array('message'=>$err));
      // echo json_encode(array('message'=>'Falha no cadastro'));
  }

  // $keys = "";
  // $values = "";
  // $i = 0;
  // foreach($_POST as $key => $value) {
  //   if (++$i == count($_POST)) {
  //     $keys = $keys . $key;
  //     $values = $values . ":" . $key;
  //     continue;
  //   }
  //   $keys = $keys . $key . ", ";
  //   $values = $values . ":" . $key . ", ";
  // }

  // $query = "INSERT INTO products (" . $keys . ") VALUES (" . $values . ")";

  // $pdo = FactoryConnection::getConnection();
  // $preparedStatement = $pdo->prepare($query);
  // foreach($_POST as $key => $value) {
  //   $preparedStatement->bindParam(':' . $key, $value);
  // }
  // $preparedStatement->execute();

  // http_response_code(201);
  // echo json_encode(array('message'=>'Cadastro realizado com sucesso'));
?>