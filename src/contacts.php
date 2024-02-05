<?php
$myemail = 'info@certasubaltic.pro';

$name            = $_POST['ask-name'];
$email           = $_POST['ask-email'];
$message         = $_POST['ask-comment'];

$email_subject = "=?UTF-8?B?" . base64_encode("ASU BALTIC Request") . "?=";
$email_body    = "Name: $name\nEmail: $email\nMessage: $message";
$headers       = "From: $email\r\n";
$headers      .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers      .= "MIME-Version: 1.0\r\n";

mail($myemail, $email_subject, $email_body, $headers);
?>
