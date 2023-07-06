<?php
  include '../../config.php';

  try {
    $query = "";
    if (!empty($_FILES)) {
      $query = "UPDATE products SET category=:category, supply=:supply, brand=:brand, sku=:sku, barCode=:barCode, ncm=:ncm, name=:name, age=:age, weight=:weight, description=:description, cover=:cover, status=:status, obs=:obs WHERE id=:id";
    } else {
      $query = "UPDATE products SET category=:category, supply=:supply, brand=:brand, sku=:sku, barCode=:barCode, ncm=:ncm, name=:name, age=:age, weight=:weight, description=:description, status=:status, obs=:obs WHERE id=:id";
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
    $preparedStatement->bindParam(':id', $_POST['id']);
    $preparedStatement->execute();

    http_response_code(200);
    echo json_encode(array('message'=>'Atualizado com sucesso'));
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>'Falha na atualização'));
  }
?>