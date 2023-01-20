//Funzione per verificare se la parola inserita è palindroma
function parolaPalindroma(parolaInserita){
    //Trasformo la parola in un array
    let arrayParola = parolaInserita.split('');
    //Inverto gli elementi dell'array
    let arrayReverse = arrayParola.reverse();
    //Trasformo l'array invertito in una parola
    let parolaReverse = arrayReverse.join('');
    //Verifico l'uguaglianda delle due parole
    if (parolaInserita == parolaReverse){
        return(`La parola ${parolaInserita} è palindroma!`);
    } else {
        return(`La parola ${parolaInserita} non è palindroma!`);
    }
}

//Funzione per generare un numero random
function numeroRandom(){
    let numero = Math.floor(Math.random() * 5 + 1);
    return numero;
}

//Funzione per verificare se la sommma è pari e dispari
function sommaNumeri (somma){
    if (somma % 2 == 0){
        return true;
    } else {
        return false;
    }
}
//-----------------------------------------------------------------------------------------
//Inizializzo i bottoni
let button = document.getElementById("palindromaButton");
let buttonPariDispari = document.getElementById("pariDispariButton");

//Click per avviare la verifica della parola palindroma
button.addEventListener("click",
    function(){
        palindromaContainer.classList.add("box");
        let parolaInserita = String(prompt("Inserisci una parola"));
        if (parolaInserita.length == 0) {
            alert("Attenzione! Inserisci una parola!");
        }
    document.getElementById("palindromaContainer").innerHTML = parolaPalindroma(parolaInserita);
    }
);

//Click per avviare il gioco pari e dispari
buttonPariDispari.addEventListener("click",
    function(){
        numeroUtenteContainer.classList.add("box");
        numeroPcContainer.classList.add("box");
        sommaContainer.classList.add("box");
        pariDispariResult.classList.add("box");
        let sceltaUtente = String(prompt("Pari o dispari?"));
        while (sceltaUtente != "pari" && sceltaUtente != "dispari"){
            alert("Attenzione! Pari o dispari?");
            sceltaUtente = String(prompt("Pari o dispari?"));
        }
        let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
        while (numeroUtente < 1 || numeroUtente > 5){
            alert("Attenzione! Inserisci un numero da 1 a 5!");
            numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
        }
        document.getElementById("numeroUtenteContainer").innerHTML = `Hai scommesso su ${sceltaUtente} ed hai scelto ${numeroUtente}!`;
        let numeroPC = parseInt(numeroRandom());
        document.getElementById("numeroPcContainer").innerHTML = `Il tuo avversario ha scelto ${numeroPC}!`;
        let somma = numeroUtente + numeroPC;
        document.getElementById("sommaContainer").innerHTML = `Il totale è ${somma}!`;
        if (sommaNumeri(somma) == true && sceltaUtente == "pari"){
            document.getElementById("pariDispariResult").innerHTML = `Il numero è pari, quindi hai vinto!`;
        } else if (sommaNumeri(somma) == false && sceltaUtente == "dispari"){
            document.getElementById("pariDispariResult").innerHTML = `Il numero è dispari, quindi hai vinto!`;
        } else {
            document.getElementById("pariDispariResult").innerHTML = `Purtroppo hai perso!`;
        }
    }
);



