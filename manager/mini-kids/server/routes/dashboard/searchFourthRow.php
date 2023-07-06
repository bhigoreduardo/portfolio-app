<?php
  include '../../config.php';
  try {
    $response = new stdClass();

    // FOURTH ROW
    $pdo = FactoryConnection::getConnection();
    $query = "SELECT SUM(sp.quantity) AS salesQuantity, p.name AS product FROM saleproducts sp INNER JOIN variates v ON sp.product = v.id INNER JOIN products p ON v.product = p.id GROUP BY p.id ORDER BY salesQuantity DESC LIMIT 0, 6";
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->execute();
    $response->mostSales = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);

    $pdo = FactoryConnection::getConnection();
    $query = "SELECT c.image, CONCAT(c.name, c.lastName) AS customer, c.mobile, c.email, c.address, s.id as sale FROM customers c INNER JOIN sales s ON s.customer = c.id WHERE MONTH(c.birthday) = MONTH(CURDATE())";
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->execute();
    $response->customerHappyYear = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);

    http_response_code(200);
    echo json_encode($response);
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>'Falha na busca'));
  }
?>