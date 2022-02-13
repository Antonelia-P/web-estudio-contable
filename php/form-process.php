<?php
use PHPMailer\PHPMailer;

$mail = new PHPMailer(true);

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["email"];
}

// MSG SUBJECT
// if (empty($_POST["msg_subject"])) {
//     $errorMSG .= "Subject is required ";
// } else {
//     $msg_subject = $_POST["msg_subject"];
// }


// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Message is required ";
} else {
    $message = $_POST["message"];
}


$EmailTo = "emanuel.higuera9@gmail.com";
$Subject = "New Message Received";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Subject: ";
$Body .= $msg_subject;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
// $success = mail($EmailTo, $Subject, $Body, "From:".$email);

// try {

//     console.log('entra');
//     $mail->isSMTP();
//     $mail->Host = 'smtp.gmail.com';
//     $mail->SMTPAuth = true;
//     $mail->Username = 'emanuel.higuera9@gmail.com';
//     $mail->Password = 'exoBjj2121';
//     $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
//     $mail->Port = '587';

//     $mail->setFrom('emanuel.higuera9@gmail.com');
//     $mail->addAdress('emanuel.higuera9@gmail.com');

//     $mail->Subject = $Subject;
//     $mail->Body = $Body;
//     $mail->send();
// } catch (\Throwable $th) {
//     //throw $th;
// }

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>