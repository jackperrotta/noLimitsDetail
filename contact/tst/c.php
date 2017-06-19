<?php

if ('POST' === $_SERVER['REQUEST_METHOD'])
{
    $to = "13spencerc@gmail.com";
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);
    $tel = trim($_POST['tel']);

    $subject = "Contact Form";
    $headers = "From: $email";
    $messages = "Name";
    $mailsent = mail($to, $subject, $messages, $headers);

    if ($mailsent)
    {
        echo "Mail sent successfuly";
    }
    else
    {
        echo "Error sending email";
    }
}

?>

