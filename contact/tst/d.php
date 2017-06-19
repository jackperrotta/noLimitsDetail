<?php
<<<<<<< HEAD
    $to = "13spencerc@gmail.com";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $headers = "From: $from";
    $subject = "You have a message sent from your site";

    $fields = array();
    $fields{"name"} = "name";
    $fields{"email"} = "email";
    $fields{"tel"} = "tel";
    $fields{"message"} = "message";
    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }
    $send = mail($to, $subject, $body, $headers);
=======

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

>>>>>>> 6dc4c42ead2181fdfd8b5f83c6cee5951009f800
?>

