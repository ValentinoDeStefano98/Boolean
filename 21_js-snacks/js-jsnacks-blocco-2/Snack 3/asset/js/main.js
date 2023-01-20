//Creare un array di numeri interi e fare la somma degli elementi in posizione dispari

//Inizializzo le variabili
let numbers=[];
let numero;
let somma = 0;

for (i = 0; i < 10; i++){
    numero = parseInt(prompt("Inserisci un numero intero"));
    if (isNaN(numero)){
        alert("Attenzione! Inserisci un valore");
        break;
    }
    numbers.push(numero);
}
//Stampo l'array iniziale
document.getElementById("arrayStampato").innerHTML = numbers;
//Stampo array dei numeri che erano in posizione dispari
for (i = 1; i < numbers.length; i+=2){
    somma += parseInt(numbers[i]);
    document.getElementById("elementiPosizioneDispari").innerHTML += `<div class="p-5">${numbers[i]}</div>`;
    
}

document.getElementById("visualSomma").innerHTML = `La somma degli elementi in posizione dispari è: ${somma}`;

