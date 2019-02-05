<?php
require "bd.php";
$dataForm = json_decode($_POST["dataForm"],true);
$login = $dataForm[0]['value'];
$password = $dataForm[1]['value'];
const SRC='../user/img/';
$respond = [
    "success" => 0,
    "error" => ""
];

if (empty($_FILES)) {
    $respond["error"] = "НЕТ ФАЙЛА";
    getRespond($respond);
}

$tmp = $_FILES[0]["tmp_name"];
$realName = $_FILES[0]["name"];
$nameFile = time().'_'.$realName;
$allowedTypes = ["image/jpeg", "image/png"];

if (is_uploaded_file($tmp)) {
    $fileInfo = finfo_open(FILEINFO_MIME_TYPE);
    $fileMimeType = finfo_file($fileInfo, $tmp);
    if (!in_array($fileMimeType, $allowedTypes)){
        $respond["error"] = "ФАЙЛ НЕ ТОТ! ЧЕРТЯГА";
        getRespond($respond);
    }
    $srcCurrent = SRC.$nameFile;
    if (move_uploaded_file($tmp, $srcCurrent)){
        $insQuery = "INSERT INTO `user` (login, password, avatar) VALUES ('".$login."', '".$password."', '".$srcCurrent."') ";
        $data2=$connect->query($insQuery);
        if(!$data2){
            $respond["error"] = 'ошибка вставки в базу данных';
            getRespond($respond);
        }
    }
    finfo_close($fileInfo);
}

$respond["success"] = 1;
getRespond($respond);

function getRespond($respond) {
    echo json_encode($respond);
    die();
}