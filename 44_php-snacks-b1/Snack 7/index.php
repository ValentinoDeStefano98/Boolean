<?php
//Array delle classi con array dei voti all'interno
$classes = [
    [
        'nome' => 'Valentino',
        'cognome' => 'De Stefano',
        'voti' => [
            'italiano' => 7,
            'matematica' => 7,
            'scienze' => 8,
            'fisica' => 7,
            'storia' => 7,
            'arte' => 6,
            'informatica' => 8
        ]
    ],
    [
        'nome' => 'Gennaro',
        'cognome' => 'Esposito',
        'voti' => [
            'italiano' => 6,
            'matematica' => 6,
            'scienze' => 9,
            'fisica' => 5,
            'storia' => 6,
            'arte' => 4,
            'informatica' => 7
        ]
    ],
    [
        'nome' => 'Aurelio',
        'cognome' => 'Giorgi',
        'voti' => [
            'italiano' => 7,
            'matematica' => 8,
            'scienze' => 9,
            'fisica' => 9,
            'storia' => 8,
            'arte' => 8,
            'informatica' => 8
        ]
    ],
    [
        'nome' => 'Marco',
        'cognome' => 'Rossi',
        'voti' => [
            'italiano' => 5,
            'matematica' => 8,
            'scienze' => 8,
            'fisica' => 8,
            'storia' => 7,
            'arte' => 6,
            'informatica' => 8
        ]
    ],
    [
        'nome' => 'Giulio',
        'cognome' => 'Vinci',
        'voti' => [
            'italiano' => 8,
            'matematica' => 9,
            'scienze' => 9,
            'fisica' => 9,
            'storia' => 9,
            'arte' => 9,
            'informatica' => 8
        ]
    ],
    [
        'nome' => 'Alessandro',
        'cognome' => 'Di Giacomo',
        'voti' => [
            'italiano' => 7,
            'matematica' => 7,
            'scienze' => 6,
            'fisica' => 6,
            'storia' => 7,
            'arte' => 6,
            'informatica' => 7
        ]
    ],
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media scolastica</title>
</head>



<body>
    <!-- Con un ciclo for, stampo i valori degli studenti e la media dei loro voti -->
    <?php for ($i = 0; $i < count($classes); $i++) { ?>
        <p>
            <?php
                echo $classes[$i]['nome'] . " ";
                echo $classes[$i]['cognome'] . " ";
                $media = intval( array_sum($classes[$i]['voti']) / count($classes[$i]['voti']));
                echo $media; 
            ?>
        </p>
            
        <?php } ?>   
</body>

<style>

    p{
        text-align: center;
    }

</style>

</html>
