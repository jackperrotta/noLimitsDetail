<?php

if ('POST' === $_SERVER['REQUEST_METHOD'])
{
    $to = "13spencerc@gmail.com";
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);
    $tel = trim($_POST['tel']);

    $subject = "Contact Form";
    $messages = "Name";
    $mailsent = mail($to, $subject, $messages);

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

