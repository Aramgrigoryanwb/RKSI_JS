<?php
require 'bd.php';
$login= $_POST['login']; 
$password= $_POST['pass']; 
$mail= $_POST['mail']; 
$gender=($_POST['gender']==NULL) ? 'null': $_POST['gender']; 
$age= ($_POST['age'] == "") ? 'null' : $_POST['age']; 
$news= (int)$_POST['news']; 
$events= (int)$_POST['events']; 
$games= (int)$_POST['games']; 
$business= $_POST['business']; 
$id = $_GET['id'];
$q = "UPDATE users SET login='".$login."',password='".$password."',mail='".$mail."',gender='".$gender."',age=$age,business='".$business."',news=$news,events=$events,games=$games WHERE id = $id";
$data = $connect->query($q);
require 'lk.php';