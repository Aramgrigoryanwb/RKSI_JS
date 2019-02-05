<?php

    $connect=new mysqli('localhost','root','','Users'); //соединение с БД
    $connect->set_charset('utf8');  // Устанавливаем поддержку передачи кириллицы в бд
    // if ($connect) {     // усли соединение состоялось
    //     $data=$connect->query("SELECT login FROM users WHERE
    //     login = '".$login."' "); // ищем в БД введённый юзером логин
    //    // var_dump( $user);
    //     $user=$data->fetch_all(MYSQLI_ASSOC)[0]['login']; // сам логин будет тут. Этой функцией мы преобарзуемобъект класса mysqli в асссоц .массив
            
    //     if ($user==$login){ // если логин уже есть возвращаем на главную
    //         echo '<script> alert("Такой пользователь уже существует"); </script>'; // можно и по другому написать
    //         require 'index.php';
    //     }
    //     else { // если логин не заянт заносим в БД
    //         $data2=$connect->query("INSERT INTO users (login, password) VALUES ('".$login."', '".$pass."') ");
           
    //        if (data2) { // если всё умпешно то
    //             echo 'Зарегистрированы';
    //            require 'index.php';
    //        }
    //        else { // иначе смотрим ошибку, но это для отладки
    //            echo 'Error!';  
    //            var_dump($connect);  // это ф-я отладки она выводит любые объекты полостью (массивы без цикла. ) 
    //        }

    //     } 

    //     $connect ->close(); // в конце работы с БД закрываем соедиение всегда. Чтобы чего не случилось.
        
    // }
    // else die( 'No connect bd'); // если нет соединения с БД