<?php
    if(isset($_POST['submit'])) {
        $to = "donavan.le@gmail.com"
        $from = $_POST['email']
        $name = $_POST['name']
        $subject = $_POST['subject']
        $message = $_POST['message']
    }
?>