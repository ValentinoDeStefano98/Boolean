<?php

$accessOk = "Accesso consentito!";
$accessDenied = "Accesso negato!";
$find = "@";
$findDot = ".";
/*
$validazioneName = false;
$validazioneAge = false;
$validazioneEmail = false;
*/

$name = ( isset( $_GET['name'] ) ) ? $_GET['name'] : '';
$email = ( isset( $_GET['name'] ) ) ? $_GET['email'] : '';
$age = ( isset( $_GET['name'] ) ) ? $_GET['age'] : '';

if((strlen($name) < 3) || !is_numeric($age) || strpos($email, $find) == false || strpos($email, $findDot) == false){
        $access = $accessDenied;
} else {
        $access = $accessOk;
}

/*correzione
//controllo se il nome ha una lunghezza maggiore di 3
if (strlen($name) < 3){
    echo "<p>Accesso negato</p>";
} else {
    $validazioneName = true;
}

//controllo se la mail contiene la chiocciola e il punto
if (strpos($email, $find) == false || strpos($email, $findDot) == false){
    echo "<p>Accesso negato</p>";
} else {
    $validazioneEmail = true;
}

//controllo se l'età è un numero
if (!is_numeric($age) || $age < 0){
    echo "<p>Accesso negato</p>";
} else {
    $validazioneAge = true;
}

//controllo le validazioni
if ($validazioneName && $validazioneEmail && $validazioneAge){
    echo "<p>Accesso riuscito</p>";
} else {
    echo "<p>Accesso negato</p>";
}
*/
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mail Check</title>
</head>
<body>
    <form method="GET" class="text-center">
        <input placeholder="Inserisci il tuo nome" type="text" name="name">
        <input placeholder="Inserisci la tua mail" type="text" name="email">
        <input placeholder="Inserisci la tua età" type="text" name="age">
        <button type="submit">Invia</button>
    </form>
    <h3>
        <?php
            echo $access;
        ?>
    </h3>

    <p>
        <h2>Ecco le credenziali che hai inserito:</h2>
        Nome: <?php echo $name ?> <br>
        E-mail: <?php echo $email ?> <br>
        Età: <?php echo $age ?>
    </p>
</body>
</html>