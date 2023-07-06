<?php
  include '../../config.php';
  try {
    $pdo = FactoryConnection::getConnection();
    $query = "SELECT s.id, s.status, s.amount, s.createdAt, CONCAT(c.name, c.lastName) AS customer, c.email AS customerEmail, c.image as customerImage, CONCAT(u.name, u.lastName) AS saller, p.name AS payment
        FROM sales s
          LEFT JOIN customers c
        ON s.customer = c.id
          LEFT JOIN users u
        ON s.saller = u.id
          LEFT JOIN paymentmethods p
        ON s.paymentMethod  = p.id
      ";
    
    $search = "";
    if (array_key_exists("search", $_GET)) {
      $search = "%" . $_GET['search'] . "%";
      $query = $query . " WHERE s.amount LIKE :search
        OR c.name LIKE :search
        OR c.lastName LIKE :search
        OR c.email LIKE :search
        OR u.lastName LIKE :search
        OR u.email LIKE :search
        OR p.name LIKE :search
        OR s.status LIKE :search
        OR s.obs LIKE :search";
    }
    $query = $query . " GROUP BY s.id ORDER BY s.id";

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

