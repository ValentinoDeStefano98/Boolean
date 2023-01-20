//Bisogna inserire un numero e stamparlo se risulta pari, altrimenti stampare il numero successivo

//Chiedo all'utente di inserire il numero
let numero = parseInt(prompt("Inserisci un numero intero"));
if (isNaN(numero)){
    alert("Attenzione! Inserisci un valore per poter effettuare la verifica!");
}
//Verifico se il numero risulta pari
if (numero % 2 == 0){
    document.getElementById("stampaPari").innerHTML = `Il numero ${numero} è pari`;
} else {
    document.getElementById("stampaPari").innerHTML = `Il numero ${numero} non è pari, quindi stampo il suo successivo, ovvero ${numero + 1}`;
}