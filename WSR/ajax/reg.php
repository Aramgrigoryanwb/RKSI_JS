<?php
$dataForm = json_decode($_POST["dataForm"]);
// var_dump($dataForm);
// var_dump($_POST);
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
$allowedTypes = ["image/jpeg", "image/png"];
if (is_uploaded_file($tmp)) {
    $fileInfo = finfo_open(FILEINFO_MIME_TYPE);
    $fileMimeType = finfo_file($fileInfo, $tmp);
    if (!in_array($fileMimeType, $allowedTypes)){
        $respond["error"] = "ФАЙЛ НЕ ТОТ!";
        getRespond($respond);
    }
    finfo_close($fileInfo);
}
$respond["success"] = 1;
getRespond($respond);


function getRespond($respond) {
    echo json_encode($respond);
    die();
}