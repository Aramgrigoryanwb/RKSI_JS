<?php
    $data = $connect->query("SELECT * FROM users WHERE id='".$id."' ");
    $users = $data->fetch_all(MYSQLI_ASSOC);
    $login= $users[0]['login']; 
    $password= $users[0]['password']; 
    $mail= $users[0]['mail']; 
    $gender=$users[0]['gender']; 
    $age= $users[0]['age']; 
    $news= (int)$users[0]["news"]; 
    $events= (int)$users[0]["events"]; 
    $games= (int)$users[0]["games"]; 
    $business= $users[0]['business'];
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/lk.css">
    <title>lk</title>
</head>
<body>
<form action="change.php?id=<?= $id ?>" method="post" class="changeF">
        <button class="change"></button>
        <h1>Личный профиль</h1>
		<input disabled type="text" name="login" value="<?=$login?>">
		<input disabled type="text" name="pass" value="<?=$password?>">
        <input disabled type="email" name="mail" value="<?=$mail?>">
        <label for="sex" class="inline men">Мужчина</label >
        <input type="radio" name="gender" value="men" class="inline">
        <label for="sex" class="inline woomen">Женщина</label>
        <input type="radio" name="gender" value="woomen" class="inline">
        <input disabled type="text" name="age" value="<?=$age?>" class="age">
        <label for="news" class="inline news">news</label>
        <input type="checkbox" name="news" class="news" value="1" class="inline">
        <label for="games" class="inline games">games</label>
        <input type="checkbox" name="games" class="games" value="1" class="inline">
        <label for="events" class="inline events">events</label>
        <input type="checkbox" name="events" class="events" value="1" class="inline">
		<select disabled name="business" class="">
			<option value="student">student</option>
			<option value="worker">worker</option>
			<option value="schoolboy">schoolboy</option>
        </select>
		<input type="submit" value="изменить">
	</form>
    <?php
        echo "<script>if('".$age."'==''){let age = document.querySelector('.age'); age.style.display='none';}</script>";
        echo "<script>if($news==0) { let news = document.querySelectorAll('.news'); news[0].style.display='none'; news[1].style.display='none';}if($games==0) {let games = document.querySelectorAll('.games'); games[0].style.display='none'; games[1].style.display='none';}if($events==0) {let events = document.querySelectorAll('.events'); events[0].style.display='none'; events[1].style.display='none';} </script>";
        echo "<script>if('".$gender."'=='men'){let men = document.querySelector('label.men'); men.style.display = 'block';console.log('w2');} else if('".$gender."'=='woomen'){console.log('w');let woomen = document.querySelector('label.woomen'); woomen.style.display = 'block';}</script>";
        echo "<script>if('".$business."' != 'none'){let options = document.querySelectorAll('select option'); options.forEach(function(option, number){if (option.innerHTML=='".$business."'){option.selected = true}});} else {let select = document.querySelector('select'); select.style.display = 'none'}</script>";
    ?>
    <script src="js/lk.js"></script>
</body>
</html>