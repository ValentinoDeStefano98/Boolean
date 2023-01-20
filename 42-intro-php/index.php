<!-- PHP -->
<?php

//Variabili (basta mettere solamente il dollaro, senza inizializzare)
$nome = 'Michele';
$nome2 = 'Marco';
$array = ['Michele', 'Fabio'];
//per non ricevere errore se la pagina non è settata per far comparire la variabile
$parametroURI = ( isset( $_GET['nome'] ) ) ? $_GET['nome'] : '';
$parametro2 = ( isset( $_GET['parametro2'] ) ) ? $_GET['parametro2'] : '';
//echo $nome;
var_dump($array);
?>

<!-- HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Intro php</title>
</head>
<body>

<!-- Inserisco la variabile all'interno dell'HTML -->
<h1>Ciao<?php echo $nome; ?></h1>

<!-- Concatenazione -->
<p>Ciao <?php echo $nome . ' ' . $nome2; ?></p>

<span><?php echo $parametroURI; ?></span>

<form method="GET">
    <input type="text" name="parametro2">
    <button type="submite">Invia</button>
</form>

<p><?php echo $parametro2; ?></p>

<?php
    var_dump( explode( '-', 'alex-96') );
?>

</body>
</html>