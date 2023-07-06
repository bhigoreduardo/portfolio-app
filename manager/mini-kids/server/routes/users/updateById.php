<?php
  include '../../config.php';

  try {
    $query = "";
    if (!empty($_FILES)) {
      $query = "UPDATE users SET username=:username, email=:email, name=:name, lastName=:lastName, phone=:phone, mobile=:mobile, cpf=:cpf, rg=:rg, birthday=:birthday, profile=:profile, image=:image, address=:address, city=:city, state=:state, neighborhood=:neighborhood, zipCode=:zipCode, number=:number, complement=:complement, status=:status, obs=:obs WHERE id=:id";
    } else {
      $query = "UPDATE users SET username=:username, email=:email, name=:name, lastName=:lastName, phone=:phone, mobile=:mobile, cpf=:cpf, rg=:rg, birthday=:birthday, profile=:profile, address=:address, city=:city, state=:state, neighborhood=:neighborhood, zipCode=:zipCode, number=:number, complement=:complement, status=:status, obs=:obs WHERE id=:id";
    }
    
    $pdo = FactoryConnection::getConnection();
    $preparedStatement = $pdo->prepare($query);
    
    $preparedStatement->bindParam(":username", $_POST["username"]);
    $preparedStatement->bindParam(":email", $_POST["email"]);
    $preparedStatement->bindParam(":name", $_POST["name"]);
    $preparedStatement->bindParam(":lastName", $_POST["lastName"]);
    $preparedStatement->bindParam(":phone", $_POST["phone"]);
    $preparedStatement->bindParam(":mobile", $_POST["mobile"]);
    $preparedStatement->bindParam(":cpf", $_POST["cpf"]);
    $preparedStatement->bindParam(":rg", $_POST["rg"]);
    $preparedStatement->bindParam(":birthday", $_POST["birthday"]);
    $preparedStatement->bindParam(":profile", $_POST["profile"]);
    
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
    $preparedStatement->bindParam(":id", $_POST["id"]);
    $preparedStatement->execute();

    http_response_code(200);
    echo json_encode(array('message'=>'Atualizado com sucesso'));
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>'Falha na atualização'));
  }
?>