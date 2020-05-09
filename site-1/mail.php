<?php
    $to = "mailTo";
    $sitename = "sitename";

    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $textarea = trim($_POST["textarea"]);
    $message = "Имя: $name \nE-mail: $email \nСообщение: $textarea";

    $subject = "Новая заявка с сайта \"$sitename\"";
    mail($to, $subject, $message, "Content-type : text/plain; charst=\"utf-8\"\nFrom: $sitename");
?>