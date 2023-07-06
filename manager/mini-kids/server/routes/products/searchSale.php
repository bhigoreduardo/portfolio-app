<?php
  include '../../config.php';
  try {
    $pdo = FactoryConnection::getConnection();
    $query = "SELECT p.id, p.sku, p.name, p.cover, c.name AS category, b.name AS brand, v.id AS variateId, v.stock, v.sale, v.discount, v.orders, v.ordersAmount, color.name AS color, s.name AS size
      FROM products p
        INNER JOIN categories c
      ON p.category = c.id
        INNER JOIN brands b
      ON p.brand = b.id
        INNER JOIN variates v
      ON v.product = p.id
        INNER JOIN colors color
      ON v.color = color.id
        INNER JOIN sizes s ON v.size = s.id
    ";
  
    $search = "";
    if (array_key_exists("search", $_GET)) {
      $search = "%" . $_GET['search'] . "%";
      $query = $query . " WHERE c.name LIKE :search
        OR b.name LIKE :search
        OR c.name LIKE :search
        OR s.name LIKE :search
        OR color.name LIKE :search
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
    $query = $query . " ORDER BY p.id";
    // $query = $query . " GROUP BY p.sku, p.name, p.cover, c.name, b.name ORDER BY p.id";

    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->bindParam(':search', $search);
    $preparedStatement->execute();
    $resultSet = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);

    http_response_code(200);
    $json = json_encode($resultSet);
    echo $json; 
  } catch (Exception $err) {
    var_dump($err);
    http_response_code(500);
    echo json_encode(array('message' => 'Falha na busca'));
  }
?>

