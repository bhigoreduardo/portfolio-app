<?php
  include '../../config.php';
  try {
    $pdo = FactoryConnection::getConnection();
    $query = "SELECT p.*, c.name AS categoryName, b.name AS brandName, s.name AS supplyName, s.mobile AS supplyMobile, AVG(v.sale) AS sale, SUM(v.stock) AS stock
        FROM products p
          LEFT JOIN categories c
        ON p.category = c.id
          LEFT JOIN brands b
        ON p.brand = b.id
          LEFT JOIN supplies s
        ON p.supply = s.id
          LEFT JOIN variates v
        ON v.product = p.id
      ";
    
    $search = "";
    if (array_key_exists("search", $_GET)) {
      $search = "%" . $_GET['search'] . "%";
      $query = $query . " WHERE p.category LIKE :search
        OR p.brand LIKE :search
        OR p.sku LIKE :search
        OR p.barCode LIKE :search
        OR p.ncm LIKE :search
        OR p.name LIKE :search
        OR p.age LIKE :search
        OR p.weight LIKE :search
        OR p.description LIKE :search
        OR p.status LIKE :search
        OR p.obs LIKE :search";
    }
    $query = $query . " GROUP BY p.id ORDER BY id";

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

