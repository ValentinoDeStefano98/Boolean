function chilometriDaInserire(){
    //chiedo all'utente di inserire il numero di chilometri
    let numeroChilometri = Number(prompt("Inserisci il numero di chilometri che intendi percorrere"));
    //validazione dati
    if (numeroChilometri.length == 0 || numeroChilometri < 10){
        alert("Attenzione! Inserisci un valore corretto");
        return;
    }
    //chiedo all'utente di inserire la sua età
    let etaUtente = Number(prompt("Inserisci la tua età"));
    //validazione dati
    if (etaUtente.length == 0 || etaUtente < 0){
        alert("Attenzione! Inserisci un valore corretto");
        return;
    }
    //messaggio di conferma dei dati inseriti
    let messaggio = `Benissimo! Hai intenzione di percorrere ${numeroChilometri} chilometri ed hai ${etaUtente} anni!`
    document.getElementById("messaggio").innerHTML = messaggio;
    //calcolo del prezzo intero in base ai chilometri
    let kmFinali;
    let tassa = 0.21;
    kmFinali = numeroChilometri * tassa;
    kmFinali = kmFinali.toFixed(2);
    console.log(`${kmFinali} €`);
    //calcolo sconto per minorenni
    let scontoMinorenni = (kmFinali * 20) / 100;
    console.log(scontoMinorenni);
    let scontoFinaleMinorenni = kmFinali - scontoMinorenni;
    scontoFinaleMinorenni = scontoFinaleMinorenni.toFixed(2);
    console.log(scontoFinaleMinorenni);
    //calcolo sconto over 65
    let scontoOver = (kmFinali * 40) /100;
    console.log(scontoOver);
    let scontoFinaleOver = kmFinali - scontoOver;
    scontoFinaleOver = scontoFinaleOver.toFixed(2);
    console.log(scontoFinaleOver);
    //condizioni da verificare per poter applicare lo sconto
    if (etaUtente < 18){
        document.getElementById("prezzoFinale").innerHTML = `Sei minorenne, quindi hai diritto al 20% di sconto! Il totale da pagare è ${scontoFinaleMinorenni}€`;
    } else if (etaUtente > 65){
        document.getElementById("prezzoFinale").innerHTML = `Hai un'età superiore ai 65 anni, quindi hai diritto al 40% di sconto! Il totale da pagare è ${scontoFinaleOver}€`;
    } else {
        document.getElementById("prezzoFinale").innerHTML = `Purtroppo non hai diritto a nessuno sconto! Il totale da pagare è ${kmFinali}€`;
    }
}