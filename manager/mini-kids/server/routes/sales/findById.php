<?php
  include '../../config.php';
  try {
    $query = "SELECT s.id, s.amount, s.offerAmount, s.createdAt, s.amountPayment, s.status, s.obs, CONCAT(c.name, c.lastName) AS customer, p.name AS payment, p.id AS paymentId, sp.price, sp.quantity, sp.subAmount, products.name AS product, products.sku, products.cover AS productImage, colors.name AS color, sizes.name AS size, categories.name AS categoryName, brands.name As brandName, customers.id AS customerId
      FROM sales s
        LEFT JOIN customers c
      ON s.customer = c.id
        LEFT JOIN paymentmethods p
      ON s.paymentMethod = p.id
        LEFT JOIN saleproducts sp
      ON sp.sale = s.id
        LEFT JOIN variates v
      ON sp.product = v.id
        LEFT JOIN products
      ON v.product = products.id
        LEFT JOIN colors
      ON v.color = colors.id
        LEFT JOIN sizes
      ON v.size = sizes.id
        LEFT JOIN categories
      ON products.category = categories.id
        LEFT JOIN brands
      ON products.brand = brands.id
        LEFT JOIN customers
      ON s.customer = customers.id
      WHERE s.id=:id;
    ";

    $pdo = FactoryConnection::getConnection();
    $preparedStatement = $pdo->prepare($query);

    $id = $_GET['id'];
    $preparedStatement->bindParam(':id', $id);
    $preparedStatement->execute();
    $resultSet = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($resultSet);

    http_response_code(200);
    echo $json;
  } catch (Exception $err) {
    http_response_code(500);
    echo json_encode(array('message'=>$err));
    // echo json_encode(array('message'=>'Falha na busca'));
  }
?>