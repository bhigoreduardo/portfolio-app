<?php
  include '../../config.php';
  try {
    $pdo = FactoryConnection::getConnection();
    $query = "SELECT p.*, s.name AS supplyName, s.lastName AS supplyLastName, s.email AS supplyEmail, s.image AS supplyImage FROM payments p INNER JOIN supplies s ON p.supply = s.id";
    
    $search = "";
    if (array_key_exists("search", $_GET)) {
      $search = "%" . $_GET['search'] . "%";
      $query = $query . " WHERE s.name LIKE :search
        OR s.lastName LIKE :search
        OR s.email LIKE :search
        OR p.deadlineAt LIKE :search
        OR p.amount LIKE :search
        OR p.status LIKE :search
        OR p.obs LIKE :search";
    }
    $query = $query . " ORDER BY id";

    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->bindParam(':search', $search);
    $preparedStatement->execute();
    $resultSet = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);
    $count = count($resultSet);

    if (array_key_exists("page", $_GET) AND array_key_exists("limit", $_GET)) {
      $begin = ($_GET['page'] - 1) * $_GET['limit'];
      $limit = $_GET['limit'];
      $query = $query . " LIMIT " . $begin . " , " . $limit;
    }

    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->bindParam(':search', $search);
    $preparedStatement->bindParam(':begin', $begin);
    $preparedStatement->bindParam(':limit', $limit);
    $preparedStatement->execute();
    $resultSet = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);

    $response = new stdClass();
    $response->records = $resultSet;
    $response->count = $count;

    http_response_code(200);
    $json = json_encode($response);
    echo $json; 
  } catch (Exception $err) {
    var_dump($err);
    http_response_code(500);
    echo json_encode(array('message' => 'Falha na busca'));
  }
?>

