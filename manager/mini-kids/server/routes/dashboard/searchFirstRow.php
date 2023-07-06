<?php
  include '../../config.php';
  try {
    $response = new stdClass();

    // FIRST ROW
    $pdo = FactoryConnection::getConnection();
    $query = "SELECT SUM(s.amount) AS amountYesterday FROM sales s WHERE createdAt BETWEEN DATE_SUB(CURDATE(),INTERVAL 1 DAY) AND CURDATE()";
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->execute();
    $response->amountYesterday = $preparedStatement->fetch(PDO::FETCH_ASSOC)["amountYesterday"];

    $pdo = FactoryConnection::getConnection();
    $query = "SELECT SUM(s.amount) AS amountToday FROM sales s WHERE DATE(createdAt) = CURDATE()";
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->execute();
    $response->amountToday = $preparedStatement->fetch(PDO::FETCH_ASSOC)["amountToday"];

    $pdo = FactoryConnection::getConnection();
    $query = "SELECT SUM(s.amount) AS salesLastYear FROM sales s WHERE YEAR(createdAt) = DATE_SUB(YEAR(CURDATE()), INTERVAL 1 YEAR)";
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->execute();
    $response->salesLastYear = $preparedStatement->fetch(PDO::FETCH_ASSOC)["salesLastYear"];

    $pdo = FactoryConnection::getConnection();
    $query = "SELECT SUM(s.amount) AS salesCurrentYear FROM sales s WHERE YEAR(createdAt) = YEAR(CURDATE())";
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->execute();
    $response->salesCurrentYear = $preparedStatement->fetch(PDO::FETCH_ASSOC)["salesCurrentYear"];

    $pdo = FactoryConnection::getConnection();
    $query = "SELECT COUNT(c.id) customersLastMonth FROM customers c WHERE MONTH(createdAt) = DATE_SUB(MONTH(CURDATE()), INTERVAL 1 MONTH)";
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->execute();
    $response->customersLastMonth = $preparedStatement->fetch(PDO::FETCH_ASSOC)["customersLastMonth"];

    $pdo = FactoryConnection::getConnection();
    $query = "SELECT COUNT(c.id) AS customersCurrentMonth FROM customers c WHERE MONTH(createdAt) = MONTH(CURDATE())";
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->execute();
    $response->customersCurrentMonth = $preparedStatement->fetch(PDO::FETCH_ASSOC)["customersCurrentMonth"];

    $pdo = FactoryConnection::getConnection();
    $query = "SELECT SUM(s.amount) salesLastMonth FROM sales s WHERE MONTH(createdAt) = DATE_SUB(MONTH(CURDATE()), INTERVAL 1 MONTH)";
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->execute();
    $response->salesLastMonth = $preparedStatement->fetch(PDO::FETCH_ASSOC)["salesLastMonth"];

    $pdo = FactoryConnection::getConnection();
    $query = "SELECT SUM(s.amount) AS salesCurrentMonth FROM sales s WHERE MONTH(createdAt) = MONTH(CURDATE())";
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->execute();
    $response->salesCurrentMonth = $preparedStatement->fetch(PDO::FETCH_ASSOC)["salesCurrentMonth"];

    http_response_code(200);
    echo json_encode($response);
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>'Falha na busca'));
  }
?>