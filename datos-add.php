<?php

    include('database.php');

    if (isset($_POST['name'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $telefono = $_POST['telefono'];
        $zona = $_POST['zona'];

        $query = "INSERT INTO `leadbd`.`leads_data` (`id`, `nombre_apellido`, `correo`, `telefono`, `zona`) VALUES ('', '$name', '$email', '$telefono', '$zona')";

        $result = mysqli_query($conexion, $query);
        if(!$result) {
            die('Query Failed');
        }
        echo 'Lead Añadida';
    }

?>