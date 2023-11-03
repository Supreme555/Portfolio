<?php
    session_start();
    if (!isset($_SESSION['login'])) {
        header('Location: /aisManifest/index_register_login.php');
        exit();
    }
    $login = $_SESSION['login'];
    $data = filter_input(INPUT_POST,'compl', FILTER_SANITIZE_SPECIAL_CHARS);

    $mysql = new mysqli('localhost','root','root','register-bd');
    $sql = "SELECT id FROM users WHERE login = '$login'";

    $result = $mysql->query($sql);
    $row = $result->fetch_row();
    $id = $row[0];
    $sql = "INSERT INTO cars (user_id, choise, login) VALUES ($id, '$data','$login')";
    $res = $mysql->query($sql);

    echo "<script>alert(\"Спасибо за заказ!\");</script>";
?>