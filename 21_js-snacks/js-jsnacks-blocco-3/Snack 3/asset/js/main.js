//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
let button = document.getElementById("buttonNumber");

button.addEventListener("click",
    function(){
        let i = 0;
        let sum = 0;
        while (i < 5){
            let numero = parseInt(prompt("Inserisci un numero"));
            if (isNaN(numero)){
                alert("Attenzione! Inserisci un numero!");
                break;
            }
            sum += numero;
            i++;
        }
        document.getElementById("somma").innerHTML = `La somma dei numeri inseriti è: ${sum}`;
    }
);


