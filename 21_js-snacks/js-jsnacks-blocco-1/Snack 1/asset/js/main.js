// chiedo all'utente due numeri con due prompt diversi (e convalido)
let primoNumero ;
let secondoNumero ;

let button1 = document.getElementById("buttonFirst");
let button2 = document.getElementById("buttonSecond");
let button3 = document.getElementById("buttonMajor");

button1.addEventListener("click",
    function(){
        primoNumero = parseInt(prompt("Inserisci il primo numero"));
        if (isNaN(primoNumero)){
        alert("Attenzione! Inserisci un valore")
        }
    }
);

button2.addEventListener("click",
    function(){
        secondoNumero = parseInt(prompt("Inserisci il secondo numero"));
        if (isNaN(secondoNumero)){
        alert("Attenzione! Inserisci un valore")
        }
    }
);

button3.addEventListener("click",
    function(){
        if (isNaN(primoNumero) || isNaN(secondoNumero)){
            alert("Attenzione! Inserisci prima i valori!");
        }
        if ( primoNumero > secondoNumero){
            document.getElementById("result").innerHTML = `Il valore maggiore è: ${primoNumero}`;
        } else if ( primoNumero < secondoNumero ){
            document.getElementById("result").innerHTML = `Il valore maggiore è: ${secondoNumero}`;
        } else {
            document.getElementById("result").innerHTML = `I due valori sono uguali`;
        }
    }
);