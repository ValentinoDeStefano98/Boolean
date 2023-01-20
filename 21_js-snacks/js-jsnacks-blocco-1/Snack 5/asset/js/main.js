//Inizializzo l'array vuoto
let arrayVuoto = [];

//Chiedo all'utente di inserire 6 numeri
for (i = 0; i < 6; i++){
    let numero = parseInt(prompt("Inserisci un numero"));
    if (isNaN(numero)){
        alert("Attenzione! Inserisci un valore corretto!")
        break;
    }
    //Aggiungo l'elemento all'array se dispari
    if (numero % 2 != 0){
        arrayVuoto.push(numero);
    }
}

document.getElementById("arrayDispari").innerHTML = `Di seguito trovi gli elementi dispari che hai inserito: ${arrayVuoto}`;