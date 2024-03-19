<?php

// $myemail = 'info@certasubaltic.pro';
$myemail = 'check-cert@eucert.pro';

$name             = $_POST['requester-name'];
$email            = $_POST['requester-email'];
$company_name     = $_POST['requester-company'];
$cert_number      = $_POST['requester-cert'];
$issuing_company  = $_POST['requester-org'];

$email_subject = "=?UTF-8?B?" . base64_encode("ECA Request Check Certificate") . "?=";
$email_body    = "Name: $name\nEmail: $email\nCompany Name: $company_name\nCertificate Number: $cert_number\nIssuing Company: $issuing_company";
$headers       = "From: $email\r\n";
$headers      .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers      .= "MIME-Version: 1.0\r\n";

mail($myemail, $email_subject, $email_body, $headers);

?>