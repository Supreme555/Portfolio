<?php 
    $login = filter_var(trim($_POST['login']),
    FILTER_SANITIZE_STRING);
    $pass = filter_var(trim($_POST['pass']),
    FILTER_SANITIZE_STRING);

    $pass = md5($pass."1234567890qwertyuiopasdfghjklzxcvbnm");

    $mysql = new mysqli('localhost','root','root','register-bd');
    
    $result = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login' AND `pass` = '$pass'");
    $user = $result->fetch_assoc();
    if ($user == 0) {
        echo "<script>alert(\"Не верный логин или пароль\");</script>";
        exit();
    }

    session_start();
    $_SESSION['login'] = $login;
    $_SESSION['id'] = $user['id'];

    if($user['id'] == '0') {
        header('Location: ../admin.php');
        exit();
    } else {
        header('Location: ../user.php');
        exit();
    }
    $mysql->close();

?>