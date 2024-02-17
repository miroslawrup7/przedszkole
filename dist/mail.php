<?php

$name = $_POST["name"];
$from = $_POST["mail"];
$subject = "Wiadomość z formularza na stronie Oksfordzik";
$to = "mareknowak11011@gmail.com";
$message = $_POST["message"];

$txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treść: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

// if ($mail_status) {
//     header("Location: /kontakt?mail_status=sent");
// } else {
//     header("Location: /kontakt?mail_status=error");
// }

?>