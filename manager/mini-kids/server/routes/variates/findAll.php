<?php
  include '../../config.php';
  try {
    $pdo = FactoryConnection::getConnection();
    $query = "SELECT v.*, c.name AS colorName, s.name AS sizeName FROM variates v INNER JOIN colors c ON v.color = c.id INNER JOIN sizes s ON v.size = s.id WHERE v.product=:product";
    
    // $query = "SELECT * FROM variates WHERE product = :product";
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->bindParam(':product', $_GET['product']);
    $preparedStatement->execute();
    $resultSet = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);

    http_response_code(200);
    $json = json_encode($resultSet);
    echo $json;      
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>$err));
    // echo json_encode(array('message'=>'Falha na busca'));
  }
?>