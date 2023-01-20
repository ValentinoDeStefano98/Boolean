//Dichiaro le variabili array e somma
const numeri = [];
let somma = 0;

//Chiedo all'utente di inserire 10 numeri
for (i = 0; i < 10; i++){
    let numero= parseInt(prompt(`Inserisci il numero ${i}`));
    if (isNaN(numero)){
        alert("Attenzione! Inserisci un valore corretto");
        break;
    }
    numeri.push(numero);
    //Sommo i numeri inseriti dall'utente
    somma += parseInt(numeri[i]);
}

document.getElementById("array").innerHTML = `Ecco i numeri che hai inserito: ${numeri}`;
document.getElementById("somma").innerHTML = `Ecco la somma dei numeri che hai inserito: ${somma}`;