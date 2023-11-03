<?php 
    $login = filter_var(trim($_POST['login']),
    FILTER_SANITIZE_STRING);
    $name = filter_var(trim($_POST['name']),
    FILTER_SANITIZE_STRING);
    $pass = filter_var(trim($_POST['pass']),
    FILTER_SANITIZE_STRING);

    if (mb_strlen($login) < 5 || mb_strlen($login) > 90) {
        echo"no_1";
        exit();
    } else if (mb_strlen($name) < 3 || mb_strlen($name) > 50) {
        echo"no_2";
        exit();
    } else if (mb_strlen($pass) < 2 || mb_strlen($pass) > 16) {
        echo"no_3";
        exit();
    }

    $pass = md5($pass."1234567890qwertyuiopasdfghjklzxcvbnm");

    $mysql = new mysqli('localhost','root','root','register-bd');
    $mysql->query("INSERT INTO `users` (`login`, `pass`, `name`)
    VALUES('$login', '$pass', '$name')");

    $mysql->close();

    echo "<script>alert(\"Вы успешно зарегистрировались\");</script>";
    exit();
?>