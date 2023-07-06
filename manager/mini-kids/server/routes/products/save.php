<?php
  include '../../config.php';

  try {
    $query = "";
    if (!empty($_FILES)) {
      $query = "INSERT INTO products (category, supply, brand, sku, barCode, ncm, name, age, weight, description, cover, status, obs) VALUES (:category, :supply, :brand, :sku, :barCode, :ncm, :name, :age, :weight, :description, :cover, :status, :obs)";
    } else {
      $query = "INSERT INTO products (category, supply, brand, sku, barCode, ncm, name, age, weight, description, status, obs) VALUES (:category, :supply, :brand, :sku, :barCode, :ncm, :name, :age, :weight, :description, :status, :obs)";
    }
    
    $pdo = FactoryConnection::getConnection();
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->bindParam(":category", $_POST["category"]);
    $preparedStatement->bindParam(":supply", $_POST["supply"]);
    $preparedStatement->bindParam(":brand", $_POST["brand"]);
    $preparedStatement->bindParam(":sku", $_POST["sku"]);
    $preparedStatement->bindParam(":barCode", $_POST["barCode"]);
    $preparedStatement->bindParam(":ncm", $_POST["ncm"]);
    $preparedStatement->bindParam(":name", $_POST["name"]);
    $preparedStatement->bindParam(":age", $_POST["age"]);
    $preparedStatement->bindParam(":weight", $_POST["weight"]);
    $preparedStatement->bindParam(":description", $_POST["description"]);
    
    if (!empty($_FILES)) {
      $file = pathinfo($_FILES['cover']['name']);
      $ext = $file['extension'];
      $date = new DateTimeImmutable();
      $newName = $date->getTimestamp() . "." . $ext;

      $target = 'C:/xampp/htdocs/server/routes/images/' . $newName;
      move_uploaded_file($_FILES['cover']['tmp_name'], $target);
      $preparedStatement->bindParam(":cover", $newName);
    }

    $preparedStatement->bindParam(":status", $_POST["status"]);
    $preparedStatement->bindParam(":obs", $_POST["obs"]);
    $preparedStatement->execute();

    http_response_code(201);
    echo json_encode(array('message'=>'Cadastro realizado com sucesso'));
  } catch (Exception $err) {
      http_response_code(500);
      echo json_encode(array('message'=>'Falha no cadastro'));
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