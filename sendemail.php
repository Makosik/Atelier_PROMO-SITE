<?php
//github PHPMaile https://github.com/PHPMailer/PHPMailer
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-6.6.0/src/PHPMailer.php';
require 'PHPMailer-6.6.0/src/Exception.php';


//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru','phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('an-tar70@ya.ru');
//Кому отправить
$mail->addAddress('an-tar70@ya.ru');
$mail->Subject = 'Письмо от клиента';

if (trim(!empty($_POST['name']))){
   $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}

if (trim(!empty($_POST['patronymic']))){
   $body.='<p><strong>Отчество:</strong> '.$_POST['patronymic'].'</p>';
}

if (trim(!empty($_POST['phone']))){
   $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
}


if (trim(!empty($_POST['email']))){
   $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
}

$mail->Body=$body;

if (!$mail->send()) {
   $message = 'Ошибка';
}else{
   $message = 'Данные отправлены';
}

$response= ['message'=>$message];

header('Content-type: application/json');
echo json_encode($response);
?>