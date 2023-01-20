let primaParola ;
let secondaParola ;

let button1 = document.getElementById("buttonFirst");
let button2 = document.getElementById("buttonSecond");
let button3 = document.getElementById("buttonMajor");

button1.addEventListener("click",
    function(){
        primaParola = String(prompt("Inserisci la prima parola"));
        if (primaParola.length === 0){
        alert("Attenzione! Inserisci una parola");
        }
    }
);

button2.addEventListener("click",
    function(){
        secondaParola = String(prompt("Inserisci la seconda parola"));
        if (secondaParola.length === 0){
        alert("Attenzione! Inserisci una parola");
        }
    }
);

button3.addEventListener("click",
    function(){
        if (primaParola.length === 0 || secondaParola.length === 0){
            alert("Attenzione! Inserisci prima i valori!");
            return;
        }
        if ( primaParola.length > secondaParola.length){
            document.getElementById("result1").innerHTML = `La parola più corta è: ${secondaParola}`;
            document.getElementById("result2").innerHTML = `La parola più lunga è: ${primaParola}`;
        } else if ( primaParola.length < secondaParola.length ){
            document.getElementById("result1").innerHTML = `La parola più corta è: ${primaParola}`;
            document.getElementById("result2").innerHTML = `La parola più lunga è: ${secondaParola}`;
        } else {
            document.getElementById("result1").innerHTML = `Le due parole hanno la stessa lunghezza`;
        }
    }
);