<?php    
  class FactoryConnection {
    private static $pdo;

    public static function getConnection(){
      if(!self::$pdo){
        try{
          self::$pdo = new PDO('mysql:host='.HOSTNAME.';dbname='.DBNAME, USER, PASS, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
          self::$pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(Exception $err){
          echo json_encode(array('message'=>'Falha ao conectar com o banco de dados'));
        }
      }

      return self::$pdo;
    }
  }
?>