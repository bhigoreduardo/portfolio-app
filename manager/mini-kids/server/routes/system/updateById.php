<?php
  include '../../config.php';

  try {
    $query = "UPDATE system SET email=:email, name=:name, lastName=:lastName, phone=:phone, mobile=:mobile, site=:site, cnpj=:cnpj, ie=:ie, address=:address, city=:city, state=:state, neighborhood=:neighborhood, zipCode=:zipCode, number=:number, complement=:complement, status=:status, obs=:obs
    WHERE id=:id";
    $pdo = FactoryConnection::getConnection();
    $preparedStatement = $pdo->prepare($query);
    
    $preparedStatement->bindParam(":email", $_POST["email"]);
    $preparedStatement->bindParam(":name", $_POST["name"]);
    $preparedStatement->bindParam(":lastName", $_POST["lastName"]);
    $preparedStatement->bindParam(":phone", $_POST["phone"]);
    $preparedStatement->bindParam(":mobile", $_POST["mobile"]);
    $preparedStatement->bindParam(":site", $_POST["site"]);
    $preparedStatement->bindParam(":cnpj", $_POST["cnpj"]);
    $preparedStatement->bindParam(":ie", $_POST["ie"]);
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
    echo json_encode(array('message'=>$err));
    // echo json_encode(array('message'=>'Falha na atualização'));
  }
?>