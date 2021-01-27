<?php
    if(isset($_POST['submit'])) {
        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
            $to = "donavan.le@gmail.com";
            $from = $_POST['email'];
            $name = $_POST['name'];
            $subject = "Portfolio Contact - " . $_POST['subject'];
            $message = "A message from: " .$name. ".\n\n". $_POST['message'];

            $headers = 'MIME-Version: 1.0' . "\r\n";
            $headers .= 'Content-Type: text/html; charset=utf-8' . "\r\n";
            $headers .= "From:" . $from;

            mail($to,$subject,$message,$headers);
        }
    }
?>