<?php
//Campos del formulario
$name = $_POST['name']; // Cada campo del formulario irá con $_POST['nombreDelCampo']
$email = $_POST['email'];
$formMessage = $_POST['form-message'];
//Atributos del correo    
$from = "info@nuriarivas.com"; // el email desde donde se envía, en tu caso será la cuenta de correo que hayas creado.
$to = "nuriarivasbotello@gmail.com"; // Cuenta de correo a la que se te envía
$subject = "Checking PHP mail"; // Asunto
$message = "El nombre del formulario es " . $name . " Su email es " . $email . " El mensaje es " . $formMessage; // El mensaje del correo, funciona igual que los strings de javascript, sólo que el lugar de poner + para juntar texto con variables, se usa el punto 
$headers = "From:" . $from;


@mail($to, $subject, $message, $headers);

header('Location: contact.html');
