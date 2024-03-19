<?php
// $myemail = 'info@certasubaltic.pro';
$myemail = 'info@eucert.pro';

$name            = $_POST['requester-name'];
$email           = $_POST['requester-email'];
$message         = $_POST['requester-msg'];

$email_subject = "=?UTF-8?B?" . base64_encode("ECA Request") . "?=";
$email_body    = "Name: $name\nEmail: $email\nMessage: $message";
$headers       = "From: $email\r\n";
$headers      .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers      .= "MIME-Version: 1.0\r\n";

mail($myemail, $email_subject, $email_body, $headers);
?>
