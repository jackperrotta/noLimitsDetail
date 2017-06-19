<?php

$EmailFrom = "13spencerc@gmail.com";
$EmailTo = "crystalfruit.cameron@gmail.com";
$Subject = "Preferred Home Improvements [Web Contact]";
$Name = Trim(stripslashes($_POST['name'])); 
$Tel = Trim(stripslashes($_POST['tel'])); 
$Email = Trim(stripslashes($_POST['email'])); 
$Message = Trim(stripslashes($_POST['message'])); 

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Tel: ";
$Body .= $Tel;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$send = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

?>

