<?php

    include('database.php');

    if (isset($_POST['name'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $informacion = $_POST['informacion'];

        $query = "INSERT INTO `lead2` (`id`, `nombre_apellido`, `correo`, `informacion`) VALUES ('', '$name', '$email', '$informacion')";

        $result = mysqli_query($connection, $query);
        if(!$result) {
            die('Query Failed');
        }
        echo 'Lead2 Añadida';
    }

?>