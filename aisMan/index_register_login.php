<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/register.css">
</head>

<body>
    <header>
        <div id="header_container">
            <img src="./images/logo.svg" alt="">
            <a rel="stylesheet" href="./index.php">ВЫХОД</a>
        </div>
    </header>
    <main>
        <div id="main_container">
            <div id="main_container_register">
                <div class="form_txt">Форма регистрации</div>
                <form action="validation_form/check.php" method="post">
                    <input type="email" class="form_control" name="login" id="login" placeholder="Введите email">
                    <input type="text" class="form_control" name="name" id="pass" placeholder="Введите имя">
                    <input type="password" class="form_control" name="pass" id="pass" placeholder="Введите пароль">
                    <button class="btn btn_success" type="submit">Зарегистрироватся</button>
                </form>
            </div>
            <div id="main_container_login">
                <div id="main_container_register">
                    <div class="form_txt">Форма авторизации</div>
                    <form action="validation_form/auth.php" method="post">
                        <input type="text" class="form_control" name="login" id="login" placeholder="Введите email">
                        <input type="password" class="form_control" name="pass" id="pass" placeholder="Введите пароль">
                        <button class="btn btn_success">Залогиниться</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
</body>

</html>