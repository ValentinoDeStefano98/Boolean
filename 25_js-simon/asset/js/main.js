 //Inizializzo l'array dei numeri casuali
 let arrayNumeriCasuali = [];
 //Inizializzo l'array dei numeri inseriti dall'utente
 let arrayUtente = [];
 //Inizializzo l'array dei numeri indovinati
 let numbersGuessed = [];
 //Inizializzo l'array dei numeri indovinati da mostrare a schermo
 let finalArray = [];

 let bigContainer = document.getElementById("bigContainer");

 let numbersAddedTitle = document.getElementById("numbersAddedTitle");

 let numbersGuessTitle = document.getElementById("numbersGuessTitle");

 //Genero 5 numeri casuali e li mostro a schermo
 for (let i = 0; i < 5; i++) {
     let numeroRandom = Math.floor(Math.random() * 100) + 1;
     arrayNumeriCasuali.push(numeroRandom);
     document.getElementById("casualNumberContainer").innerHTML += `<div class="p-3 border border-dark bg-warning">${arrayNumeriCasuali[i]}</div>`;
 }

 //Imposto il timer per far partire i prompt
 setTimeout(removeNumbers, 29000);
 setTimeout(chiediNumeri, 30000);

 //Funzione principale per chiedere 5 numeri con il prompt
 function chiediNumeri() {
     for (let i = 0; i < 5; i++) {
         let numeroUtente = parseInt(prompt("Inserisci il numero"));
         while (isNaN(numeroUtente)){
             alert("Attenzione! Inserisci un valore");
             return;
         }
         arrayUtente.push(numeroUtente);
         document.getElementById("userNumberContainer").innerHTML += `<div class="p-3 border border-dark bg-warning">${arrayUtente[i]}</div>`;
     }    
     controlNumber();
     numbersAddedTitle.classList.remove("d-none");
     numbersGuessTitle.classList.remove("d-none");
     bigContainer.classList.remove("d-none");
    
 }

 //Funzione per controllare se l'utente ha indovinato i numeri
 function controlNumber() {
     for (let i = 0; i < arrayUtente.length; i++){
        if(arrayNumeriCasuali.includes(arrayUtente[i])){
             numbersGuessed.push(parseInt(arrayUtente[i]));
         }
    }        
     if (numbersGuessed.length == 0){
         document.getElementById("message").innerHTML = `<div class="fs-6">Non hai indovinato nessun numero!</div>`
     } else {
         for (i = 0; i < numbersGuessed.length; i++){
             finalArray.push(numbersGuessed[i]);
             document.getElementById("numbersGuessedContainer").innerHTML += `<div class="p-3 border border-dark bg-success">${finalArray[i]}</div>`;
         }
        document.getElementById("message").innerHTML = `Hai indovinato ${finalArray.length} numeri!`;
     }
}

function removeNumbers(){
    bigContainer.classList.add("d-none");
}