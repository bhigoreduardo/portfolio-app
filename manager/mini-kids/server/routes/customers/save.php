<?php
  include '../../config.php';

  try {
    $query = "";
    if (!empty($_FILES)) {
      $query = "INSERT INTO customers (personType, email, name, lastName, phone, mobile, cpfCnpj, rgIe, birthday, image, address, city, state, neighborhood, zipCode, number, complement, status, obs)
      VALUES (:personType, :email, :name, :lastName, :phone, :mobile, :cpfCnpj, :rgIe, :birthday, :image, :address, :city, :state, :neighborhood, :zipCode, :number, :complement, :status, :obs)";
    } else {
      $query = "INSERT INTO customers (personType, email, name, lastName, phone, mobile, cpfCnpj, rgIe, birthday, address, city, state, neighborhood, zipCode, number, complement, status, obs)
      VALUES (:personType, :email, :name, :lastName, :phone, :mobile, :cpfCnpj, :rgIe, :birthday, :address, :city, :state, :neighborhood, :zipCode, :number, :complement, :status, :obs)";
    }

    $pdo = FactoryConnection::getConnection();
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->bindParam(":personType", $_POST["personType"]);
    $preparedStatement->bindParam(":email", $_POST["email"]);
    $preparedStatement->bindParam(":name", $_POST["name"]);
    $preparedStatement->bindParam(":lastName", $_POST["lastName"]);
    $preparedStatement->bindParam(":phone", $_POST["phone"]);
    $preparedStatement->bindParam(":mobile", $_POST["mobile"]);
    $preparedStatement->bindParam(":cpfCnpj", $_POST["cpfCnpj"]);
    $preparedStatement->bindParam(":rgIe", $_POST["rgIe"]);
    $preparedStatement->bindParam(":birthday", $_POST["birthday"]);

    if (!empty($_FILES)) {
      $file = pathinfo($_FILES['image']['name']);
      $ext = $file['extension'];
      $date = new DateTimeImmutable();
      $newName = $date->getTimestamp() . "." . $ext;

      $target = 'C:/xampp/htdocs/server/routes/images/' . $newName;
      move_uploaded_file($_FILES['image']['tmp_name'], $target);
      $preparedStatement->bindParam(":image", $newName);
    }

    $preparedStatement->bindParam(":address", $_POST["address"]);
    $preparedStatement->bindParam(":city", $_POST["city"]);
    $preparedStatement->bindParam(":state", $_POST["state"]);
    $preparedStatement->bindParam(":neighborhood", $_POST["neighborhood"]);
    $preparedStatement->bindParam(":zipCode", $_POST["zipCode"]);
    $preparedStatement->bindParam(":number", $_POST["number"]);
    $preparedStatement->bindParam(":complement", $_POST["complement"]);
    $preparedStatement->bindParam(":status", $_POST["status"]);
    $preparedStatement->bindParam(":obs", $_POST["obs"]);
    $preparedStatement->execute();

    http_response_code(201);
    echo json_encode(array('message'=>'Cadastro realizado com sucesso'));
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>'Falha no cadastro'));
  }
?>
