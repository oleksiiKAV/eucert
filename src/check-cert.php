<?php

$myemail = 'info@certasubaltic.pro';

$name             = $_POST['name'];
$email            = $_POST['email'];
$company_name     = $_POST['company-name'];
$cert_number      = $_POST['cert-number'];
$issuing_company  = $_POST['issuing-company'];

$email_subject = "=?UTF-8?B?" . base64_encode("ASU BALTIC Request Check Certificate") . "?=";
$email_body    = "Name: $name\nEmail: $email\nCompany Name: $company_name\nCertificate Number: $cert_number\nIssuing Company: $issuing_company";
$headers       = "From: $email\r\n";
$headers      .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers      .= "MIME-Version: 1.0\r\n";

mail($myemail, $email_subject, $email_body, $headers);

?>