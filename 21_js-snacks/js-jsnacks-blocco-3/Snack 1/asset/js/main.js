//Creare un array vuoto e chiedere all’utente un numero da inserire nell’array. Continuare a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

//Dichiaro l'array vuoto e le variabili
let arrayNumeri = [];
let sum = 0;
let button = document.getElementById("buttonArray");


button.addEventListener("click",
    function(){
    //Inizializzo il ciclo
    while(sum < 50){
        let number = parseInt(prompt("Inserisci un numero"));
        arrayNumeri.push(number);
        sum += number;
        if (sum > 50){
            arrayNumeri.pop();
        }
    }
    //Stampo array e somma
    document.getElementById("array").innerHTML = `Ecco il tuo array: ${arrayNumeri}`;
    document.getElementById("somma").innerHTML = `Ecco la somma degli elementi inseriti: ${sum}`;
    }
);

