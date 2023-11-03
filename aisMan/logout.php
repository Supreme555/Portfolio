<?php 
    session_start();
    session_unset();
    header('Location: ./index_register_login.php');
?>