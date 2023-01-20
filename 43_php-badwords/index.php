<?php
$paragrafo = "In senso proprio, il termine è sinonimo di foresta tropicale decidua e spesso anche di foresta monsonica; indica un bioma caratterizzato da una foresta impenetrabile e ricca di alberi caducifogli, tipico dei climi tropicali in cui a un lungo periodo piovoso si alterna una stagione secca.";
$lunghezzaStringa = strlen($paragrafo);

/* Metodo con isset
$parametro = ( isset( $_GET['parametro'] ) ) ? $_GET['parametro'] : '';
$paragrafo2 = str_replace($parametro, "***", $paragrafo);
$lunghezzaStringa2 = strlen($paragrafo2);
*/

/* Metodo con Empty e ciclo if
if( $_GET['parametro'] != '' ){
    $parametro = $_GET['parametro'];
    $paragrafo2 = str_replace($parametro, "***", $paragrafo);
    $lunghezzaStringa2 = strlen($paragrafo2);
} else {
    $paragrafo2 = $paragrafo;
}
*/

//Metodo con empty
if( !empty($_GET['parametro']) != '' ){
    $parametro = $_GET['parametro'];
    $paragrafo2 = str_replace($parametro, "***", $paragrafo);
    $lunghezzaStringa2 = strlen($paragrafo2);
} else {
    $paragrafo2 = $paragrafo;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>BadWord</title>
</head>
<body>
    <h1 class="text-center">La giungla censurata</h1>
    <p><?php echo $paragrafo; ?></p>
    <p class="text-center">La lunghezza del paragrafo è: <?php echo $lunghezzaStringa; ?></p>
    <h3 class="text-center">Inserisci una parola da censurare</h3>
    <form method="GET" class="text-center">
        <input type="text" name="parametro">
        <button type="submite">Invia</button>
    </form>
    <p><?php echo $paragrafo2; ?></p>
    <p class="text-center">La lunghezza del paragrafo censurato è: <?php echo $lunghezzaStringa2; ?></p>  
</body>
</html>