<?php

$mailTo = 'zuzumaster@yandex.ru';

$subject = 'Письмо с сайта zuzumaster.ru';

$headers = 'Content-Type: text/plain; charset=utf-8';
$name = $_POST['name'];
$tel = $_POST['phoneNumber'];
$date = date('d/m/Y');
$time = date('H:i');

$message = "Имя заказчика: $name\nТелефон: $tel\nДата заказа: $date\nВремя заказа: $time";

mail($mailTo, $subject, $message, $headers);

file_put_contents('orders.txt', "$message\n---\n", FILE_APPEND | LOCK_EX);

?>
