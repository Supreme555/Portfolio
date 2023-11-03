<?php
    session_start();
    if (!isset($_SESSION['id'])) {
        header('Location: /aisManifest/index_register_login.php');
        exit();
    }
    if ($_SESSION['id'] != '0') {
        header('Location: /aisManifest/index_register_login.php');
        exit();
    }

    $mysql = new mysqli('localhost','root','root','register-bd');
    $sql = "SELECT id,login,choise FROM cars ORDER BY id DESC LIMIT 100";
    $result = $mysql->query($sql);
    $res = $result->fetch_all();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/admin.css?t=<?php echo(rand())?>">
    <title>Document</title>
</head>
<body>
    <header>
        <div id="header_container">
            <img src="./images/logo.svg" alt="">
            <a rel="stylesheet" href="./logout.php">ВЫХОД</a>
        </div>
    </header>
    <main>
        <section class="container_main">
            <h1>Заказы</h1>
            <ul>
                <li>
                    <span class="id">id</span>
                    <span class="email">email</span>
                    <span class="choise">car</span>
                </li>
                <?php for($i = 0;$i < count($res);$i++):?>
                <li>
                    <span class="id"><?php echo $res[$i][0] ?></span>
                    <span class="email"><?php echo $res[$i][1] ?></span>
                    <span class="choise"><?php echo $res[$i][2] ?></span>
                </li>
                <?php endfor; ?>
            </ul>
        </section>
    </main>
</body>
</html>

