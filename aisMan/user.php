<?php 
    session_start();
    if (!isset($_SESSION['login'])) {
        header('Location: /aisManifest/index_register_login.php');
    }
?>
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/user.css">
</head>

<body>
    <header>
        <div id="header_container">
            <img src="./images/logo.svg" alt="">
            <a rel="stylesheet" href="./logout.php">ВЫХОД</a>
        </div>
    </header>
    <main>
        <div id="main_container">
            <div id="main_container_car_1">
                <div id="main_container_car_1_in">
                    <form action="choose_car_form/user_form.php" method="post">
                        <div class="form_txt">Hyundai Tucson</div>
                        <input type="radio" name="compl" value="Hyundai_Tucson_Comfort"><label for="compl">Comfort</label>
                        <input type="radio" name="compl" value="Hyundai_Tucson_Travel"><label for="compl">Travel</label>
                        <input type="radio" name="compl" value="Hyundai_Tucson_High_Tech"><label for="compl">High-Tech</label>
                        <input type="radio" name="compl" value="Hyundai_Tucson_Luxe"><label for="compl">Luxe</label>
                        <br>
                        <div class="form_txt">Hyundai Bayon</div>
                        <input type="radio" name="compl" value="Hyundai_Bayon_Comfort"><label for="compl">Comfort</label>
                        <input type="radio" name="compl" value="Hyundai_Bayon_Travel"><label for="compl">Travel</label>
                        <input type="radio" name="compl" value="Hyundai_Bayon_High_Tech"><label for="compl">High-Tech</label>
                        <input type="radio" name="compl" value="Hyundai_Bayon_Luxe"><label for="compl">Luxe</label>
                        <br>
                        <div class="form_txt">Hyundai Santa Fe</div>
                        <input type="radio" name="compl" value="Hyundai_Santa_Fe_Comfort"><label for="compl">Comfort</label>
                        <input type="radio" name="compl" value="Hyundai_Santa_Fe_Travel"><label for="compl">Travel</label>
                        <input type="radio" name="compl" value="Hyundai_Santa_Fe_High_Tech"><label for="compl">High-Tech</label>
                        <input type="radio" name="compl" value="Hyundai_Santa_Fe_Luxe"><label for="compl">Luxe</label>
                        <br>
                        <div class="form_txt">Hyundai Palisade</div>
                        <input type="radio" name="compl" value="Hyundai_Palisade_Comfort"><label for="compl">Comfort</label>
                        <input type="radio" name="compl" value="Hyundai_Palisade_Travel"><label for="compl">Travel</label>
                        <input type="radio" name="compl" value="Hyundai_Palisade_High_Tech"><label for="compl">High-Tech</label>
                        <input type="radio" name="compl" value="Hyundai_Palisade_Luxe"><label for="compl">Luxe</label>
                        <br>
                        <div class="form_txt">Hyundai Staria</div>
                        <input type="radio" name="compl" value="Hyundai_Staria_Comfort"><label for="compl">Comfort</label>
                        <input type="radio" name="compl" value="Hyundai_Staria_Travel"><label for="compl">Travel</label>
                        <input type="radio" name="compl" value="Hyundai_Staria_High_Tech"><label for="compl">High-Tech</label>
                        <input type="radio" name="compl" value="Hyundai_Staria_Luxe"><label for="compl">Luxe</label>
                        <br>
                        <button type="submit">Заказать</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
</body>

</html>