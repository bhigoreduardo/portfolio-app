<?php
  include '../../config.php';
  try {
    $response = new stdClass();

    // SECOND ROW
    $arr = array();
    for ($i = 1; $i <= 12; $i++) {
      $pdo = FactoryConnection::getConnection();
      $query = "SELECT SUM(s.amount) salesMonth" . $i . " FROM sales s WHERE MONTH(createdAt) = " . $i . " AND YEAR(createdAt) = YEAR(CURDATE())";
      $preparedStatement = $pdo->prepare($query);
      $preparedStatement->execute();
      $sales = "salesMonth" . $i;
      // $response->$sales = $preparedStatement->fetch(PDO::FETCH_ASSOC)[$sales];
      $resultSet = $preparedStatement->fetch(PDO::FETCH_ASSOC);
      if (is_null($resultSet)) {
        array_push($arr, 0);
      } else {
        array_push($arr, $resultSet[$sales]);
      }
    }
    $response->sales = $arr;

    $pdo = FactoryConnection::getConnection();
    $query = "SELECT s.id, s.createdAt, s.amount FROM sales s ORDER BY s.createdAt DESC LIMIT 0, 20";
    $preparedStatement = $pdo->prepare($query);
    $preparedStatement->execute();
    $response->lastSales = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);

    http_response_code(200);
    echo json_encode($response);
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>'Falha na busca'));
  }
  // array_push($sales, $preparedStatement->fetch(PDO::FETCH_ASSOC)[$sales]);
  // $response->$sales = $sales;
?>