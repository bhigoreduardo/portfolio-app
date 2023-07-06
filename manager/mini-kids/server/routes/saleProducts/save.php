<?php
  include '../../config.php';

  try {
      $query = "INSERT INTO saleproducts (sale, product, price, quantity, offer, subAmount, subAmountOffer) VALUES (:sale, :product, :price, :quantity, :offer, :subAmount, :subAmountOffer)";
      $pdo = FactoryConnection::getConnection();
      $preparedStatement = $pdo->prepare($query);

      $preparedStatement->bindParam(':sale', $_POST['sale']);
      $preparedStatement->bindParam(':product', $_POST['product']);
      $preparedStatement->bindParam(':price', $_POST['price']);
      $preparedStatement->bindParam(':quantity', $_POST['quantity']);
      $preparedStatement->bindParam(':offer', $_POST['offer']);
      $preparedStatement->bindParam(':subAmount', $_POST['subAmount']);
      $preparedStatement->bindParam(':subAmountOffer', $_POST['subAmountOffer']);
      $preparedStatement->execute();

      $stock = $_POST['stock'] - $_POST['quantity'];
      $orders = (int)$_POST['orders'] + 1;
      $ordersAmount = $_POST['ordersAmount'] + $_POST['subAmount'];
      $query = "UPDATE variates SET stock=:stock, orders=:orders, ordersAmount=:ordersAmount  WHERE id=:product";
      $pdo = FactoryConnection::getConnection();
      $preparedStatement = $pdo->prepare($query);
      $preparedStatement->bindParam(':stock', $stock);
      $preparedStatement->bindParam(':orders', $orders);
      $preparedStatement->bindParam(':ordersAmount', $ordersAmount);
      $preparedStatement->bindParam(':product', $_POST['product']);
      $preparedStatement->execute();

      http_response_code(201);
      echo json_encode(array('message'=>'Cadastro realizado com sucesso'));
  } catch (Exception $err) {
      echo json_encode(array('message'=>'Falha no cadastro'));
  }
?>