<?php
  include '../../config.php';

  try {
      $query = "INSERT INTO sales (customer, paymentMethod, saller, amount, offerAmount, amountPayment, status, obs)
      VALUES (:customer, :paymentMethod, :saller, :amount, :offerAmount, :amountPayment, :status, :obs)";
      $pdo = FactoryConnection::getConnection();
      $preparedStatement = $pdo->prepare($query);

      $preparedStatement->bindParam(':customer', $_POST['customer']);
      $preparedStatement->bindParam(':paymentMethod', $_POST['paymentMethod']);
      $preparedStatement->bindParam(':saller', $_POST['saller']);
      $preparedStatement->bindParam(':amount', $_POST['amount']);
      $preparedStatement->bindParam(':offerAmount', $_POST['offerAmount']);
      $preparedStatement->bindParam(':amountPayment', $_POST['amountPayment']);
      $preparedStatement->bindParam(':status', $_POST['status']);
      $preparedStatement->bindParam(':obs', $_POST['obs']);
      $preparedStatement->execute();
      $lastId = $pdo->lastInsertId();

      // foreach(json_decode($_POST["saleProducts"]) as $key => $value) {
      //   $query = "INSERT INTO saleproducts (sale, product, price, quantity, offer, subAmount, subAmountOffer)
      //   VALUES (:sale , :product, :price, :quantity, :offer, :subAmount, :subAmountOffer)";
      //   $pdo = FactoryConnection::getConnection();
      //   $preparedStatement = $pdo->prepare($query);

      //   $preparedStatement->bindParam(':sale ', $lastId);
      //   $preparedStatement->bindParam(':product ', $value['product']);
      //   $preparedStatement->bindParam(':price', $value['price']);
      //   $preparedStatement->bindParam(':quantity', $value['quantity']);
      //   $preparedStatement->bindParam(':offer', $value['offer']);
      //   $preparedStatement->bindParam(':subAmount', $value['subAmount']);
      //   $preparedStatement->bindParam(':subAmountOffer', $value['subAmountOffer']);
      //   $preparedStatement->execute();
      // }

      http_response_code(201);
      // echo json_encode(array('message'=>json_encode($_POST["saleProducts"])));
      echo json_encode(array('message'=>$lastId));
      // echo json_encode(array('message'=>'Cadastro realizado com sucesso'));
  } catch (Exception $err) {
      echo json_encode(array('message'=>'Falha no cadastro'));
  }
?>