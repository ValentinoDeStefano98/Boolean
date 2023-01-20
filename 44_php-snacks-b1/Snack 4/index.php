<?php

$numberArray = [];
while (count($numberArray) < 15){
    $randomNumber = rand(0, 100);

    if (!in_array($randomNumber, $numberArray)){
        $numberArray[] = $randomNumber;
    }
}
foreach($numberArray as $item){
    echo $item . "<br>";
}
?>