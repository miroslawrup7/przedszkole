<?php

$name = $_POST["name"];
$surname = $_POST["surname"];
$from = $_POST["mail"];
$phone = $_POST["phone"];
$page = $_POST["page"];
$subject = "Wiadomość z formularza na stronie Oksfordzik / " . $page;
$to = "chrupek999@gmail.com";
// $to = "czesc@oksfordzik.pl";
$message = $_POST["message"];



$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";
$headers .= "MIME-Version: 1.0 \r\n";
$headers .= "Content-Type: text/html; charset=UTF-8";

$txt = "<span style='color:#666;'>Imię: </span>" . $name . "<br>";
$txt .= "<span style='color:#666;'>Nazwisko: </span>" . $surname . "<br>";
$txt .= "<span style='color:#666;'>Telefon: </span>" . $phone . "<br>";
$txt .= "<span style='color:#666;'>Email: </span>" . $from . "<br><br>";
$txt .= "<span style='color:#666;'>Treść wiadomości: </span>" . $message . "<br>";




$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    header("Location: kontakt.html?mail_status=sent");
} else {
    header("Location: kontakt.html?mail_status=error");
}

?>