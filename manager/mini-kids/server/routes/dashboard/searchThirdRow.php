<?php
  include '../../config.php';
  try {
    $response = new stdClass();

    // THIRD ROW
    $pdo = FactoryConnection::getConnection();
    $query = "SELECT p.sku, p.name, p.cover, SUM(v.stock) AS quantity, SUM(v.ordersAmount) AS salesAmount, SUM(v.stock * v.coast) AS coastAmount FROM products p LEFT JOIN variates v ON v.product = p.id GROUP BY p.id ORDER BY p.createdAt DESC LIMIT 0, 20";
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->execute();
    $response->lastProducts = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);

    $pdo = FactoryConnection::getConnection();
    $query = "SELECT p.id, p.sku, p.name, p.cover, SUM(v.stock) AS quantity, SUM(v.stock * v.coast) AS coastAmount FROM products p LEFT JOIN variates v ON v.product = p.id GROUP BY p.id ORDER BY p.createdAt ASC LIMIT 0, 20";
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->execute();
    $response->oldProducts = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);

    http_response_code(200);
    echo json_encode($response);
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>'Falha na busca'));
  }
?>