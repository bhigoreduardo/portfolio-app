<?php
    // SESSION AND COOKIES
    session_start();

    // DATETIME
    date_default_timezone_set('America/Sao_Paulo');

    // CLASSES AUTOLOAD
    $autoload = function($class){
        $class = str_replace('\\', '/', $class);
        include($class.'.php');
    };
    spl_autoload_register($autoload);

    // CONSTANTS DATABASE
    define('HOSTNAME', 'localhost');
    define('DBNAME', 'server');
    define('USER', 'root');
    define('PASS', '');
?>