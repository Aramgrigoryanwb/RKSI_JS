<?php
 

	 ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
	
	<form action="reg.php" method="post">
		<input type="text" name="login" placeholder="login" >
		<input type="password" name="pass" placeholder="pass">
		<input type="email" name="mail" placeholder="mail">
		<label for="show">Подробнее</label>
		<input type="checkbox" id="show"  name="show">

<!-- Разварачивание-->
		<label for="sex" class="showMore">М</label >
		 <input type="radio" name="gender" value="men" class="showMore">
		 <label for="sex" class="showMore">Ж</label>
		 <input type="radio" name="gender" value="woomen" class="showMore">
		<input type="text" name="age" placeholder="Age" class="showMore">
		<label for="news" class="showMore">news</label>
		<input type="checkbox" name="news" value="1" class="showMore">
		<label for="games" class="showMore">games</label>
		<input type="checkbox" name="games" value="1" class="showMore">
		<label for="events" class="showMore">events</label>
		<input type="checkbox" name="events" value="1" class="showMore">
		<select name="business" class="showMore">
			<option value="none">не выбрано</option>
			<option value="student">student</option>
			<option value="worker">worker</option>
			<option value="schoolboy">schoolboy</option>
		</select>


		<input type="submit" value="зарегистрироваться">
	</form>


<script src="js/main.js"></script>
</body>
</html>
