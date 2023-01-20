// Dichiaro i primi valori 
let valoreChilometri = document.getElementById("chilometri");

let valoreEta = document.getElementById("age");

let button = document.getElementById("ticket_button");

let valoreNome = document.getElementById("nomeCognome");

let cancelButton = document.getElementById("cancel_button");

let hidden = document.getElementById("show");
// Eventi scatenati dal click del pulsante
button.addEventListener("click",
    function(){
        // Convalida dati nome e numero di chilometri
        let convalidaNome = String(valoreNome.value);
        let convalidaChilometri = String(valoreChilometri.value);
        if(convalidaNome.length == 0 || convalidaChilometri.length == 0){
            alert("Attenzione, inserisci correttamente i tuoi dati prima di continuare");
            return;
        }
        // Mostro il biglietto
        hidden.classList.remove("d-none");
        // Stampo il nome del passeggero
        document.getElementById("name").innerHTML = valoreNome.value;
        // Stampo il tipo di biglietto in base all'età del passeggero
        document.getElementById("ticketType").innerHTML = valoreEta.value;
        // Genero un numero casuale per la carrozza
        let carrozza = Math.floor(Math.random()*15);
        document.getElementById("numeroCarrozza").innerHTML = carrozza;
        // Genero un numero casuale per il codice
        let codice = Math.floor(Math.random()*99999);
        document.getElementById("codiceCP").innerHTML = codice;
        // Calcolo il prezzo intero
        let km = valoreChilometri.value;
        const tassa = 0.21;
        kmFinali = km * tassa;
        kmFinali = kmFinali.toFixed(2);
        console.log(kmFinali);
        // Calcolo lo sconto per i minorenni
        let scontoMinorenni = (kmFinali * 20) / 100;
        let scontoFinaleMinorenni = kmFinali - scontoMinorenni;
        scontoFinaleMinorenni = scontoFinaleMinorenni.toFixed(2);
        console.log(scontoFinaleMinorenni);
        // Calcolo lo sconto per gli over 65
        let scontoOver = (kmFinali * 40) / 100;
        let scontoFinaleOver = kmFinali - scontoOver;
        scontoFinaleOver = scontoFinaleOver.toFixed(2);
        console.log(scontoFinaleOver);
        // Stampo il prezzo finale in base allo sconto
        let sconto = valoreEta.value;
        if(sconto == "Biglietto Under 18"){
            document.getElementById("costo").innerHTML = `${scontoFinaleMinorenni}€`;
        } else if(sconto == "Biglietto Over 65"){
            document.getElementById("costo").innerHTML = `${scontoFinaleOver}€`;
        } else{
            document.getElementById("costo").innerHTML = `${kmFinali}€`;
        }  
    }  
);
// Cancello e nascondo il biglietto
cancelButton.addEventListener("click",
    function(){
        hidden.classList.add("d-none");
    }

);