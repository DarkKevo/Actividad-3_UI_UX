<?php

    $connection = mysqli_connect(
        'localhost',
        'root',
        '',
        'leads'
    );

    if($connection) {
        echo 'database connected';
    }

?>