<?php
//Array
$matches = [
    [
        'team1' => 'Acqua S.Bernardo Cantù',
        'team2' => 'Oriora Pistoia',
        'point_team1' => 70,
        'point_team2' => 45
    ],
    [
        'team1' => 'Fortitudo Pompea Bologna',
        'team2' => 'Dolomiti Energia Trentino',
        'point_team1' => 82,
        'point_team2' => 83
    ],
    [
        'team1' => 'Pallacanestro Trieste',
        'team2' => 'Virtus Roma',
        'point_team1' => 72,
        'point_team2' => 73
    ],
    [
        'team1' => 'Openjobmetis Varese',
        'team2' => 'Germani Basket Brescia',
        'point_team1' => 101,
        'point_team2' => 99
    ],
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matches</title>
</head>
<body>
    <p>
        <?php
        for($i=0; $i < count($matches); $i++) {
            echo "<p>" .  $matches[$i]['team1'] .  "<span>" . " " . "-". " " . $matches[$i]['team2'] . " " . "|" . " " . " " . $matches[$i]['point_team1'] . "-" . $matches[$i]['point_team2'] .  "</span>" ."</p>";
        }
        ?>
    </p>   
</body>

<style>

    p{
        text-align: center;
    }

</style>

</html>