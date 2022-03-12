<?php

    $local = 'localhost';
    $user = 'root';

    $conexion = new mysqli($local, $user, '');

    if ($conexion){
        echo 'Datos Conectados';
    }

    if ($conexion -> connect_error) {
        die('Failed Connection');
    }

    $create = "CREATE DATABASE IF NOT EXISTS leadbd";

    if ($conexion -> query($create) === TRUE) {
        $create = "CREATE TABLE IF NOT EXISTS `leadbd`.`leads_data` ( `id` INT NOT NULL AUTO_INCREMENT ,  `nombre_apellido` VARCHAR(100) NOT NULL ,  `correo` VARCHAR(100) NOT NULL ,  `telefono` BIGINT(50) NOT NULL ,  `zona` VARCHAR(100) NOT NULL ,    PRIMARY KEY  (`id`)) ENGINE = InnoDB;";

        $create2 = "CREATE TABLE IF NOT EXISTS `leadbd`.`leads_data2` ( `id` INT NOT NULL AUTO_INCREMENT , `nombre_apellido` VARCHAR(100) NOT NULL , `correo` VARCHAR(100) NOT NULL , `informacion` VARCHAR(500) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;";
        
        if ($conexion -> query($create) != TRUE) {
            echo 'Failed Creation ' .$conexion -> error;
        }

        if ($conexion -> query($create2) != TRUE) {
            echo 'Failed Creation ' .$conexion -> error;
        }
    } else {
        echo 'I Have a Problem here... ' .$conexion -> error;
    }
    // $connection = mysqli_connect(
    //     'localhost',
    //     'root',
    //     '',
    //     'leads'
    // );

    // if($connection) {
    //     echo 'database connected';
    // }

?>