<?php 
require 'bd.php';
if($login==''){
    if (sizeof($_POST)==2){
        $login= $_POST['login']; 
        $password= $_POST['pass'];
        if($connect){
            $data = $connect->query("SELECT id, login, password, mail FROM users WHERE login='".$login."' OR mail='".$login."' ");
            $users = $data->fetch_all(MYSQLI_ASSOC);
            if($users){
                if ($users[0]["login"]==$login || $users[0]["mail"]==$login){
                    if ($users[0]["password"]==$password) {
                        $id = $users[0]['id'];
                        require_once "lk.php";
                    }
                    else { 
                        require_once "index.php"; 
                        echo "<script>alert('login or mail already exists');</script>";
                    }
                }
            } else {require_once "index.php"; echo "<script>alert('login or mail already exists');</script>";}
        }
    } 
    else if (sizeof($_POST)>2){
        $login= $_POST['login']; 
        $password= $_POST['pass']; 
        $mail= $_POST['mail']; 
        $gender=$_POST['gender'];
        $age= ($_POST['age'] == "") ? 'null' : $_POST['age']; 
        $news= (int)$_POST["news"]; 
        $events= (int)$_POST["events"]; 
        $games= (int)$_POST["games"]; 
        $business= $_POST['business']; 
        if($connect){
            $data = $connect->query("SELECT * FROM users WHERE login='".$login."' OR password='".$password."' ");
            $users = $data->fetch_all(MYSQLI_ASSOC);
            if($users){
                require_once "signup.php";
                echo "<script>alert('User already exists');</script>";
            } else {
                $insQuery = "INSERT INTO users (login, password, mail, gender, age, news, events, games, business) VALUES ('".$login."', '".$password."', '".$mail."', '".$gender."', $age, $news, $events, $games, '".$business."') ";
                $data2=$connect->query($insQuery);
                $data3 = $connect->query("SELECT id FROM users WHERE login='".$login."'");
                $users2 = $data3->fetch_all(MYSQLI_ASSOC);
                $id = $users2[0]['id'];
                require_once "lk.php";
            }
        }
    }
}