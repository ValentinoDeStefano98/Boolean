//Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.


let button = document.getElementById("buttonArray");
//ciclo while
button.addEventListener("click",
    function () {
        const N = parseInt(prompt("Inserisci un numero intero"));
        let i = 0;
        while (i < N) {
            let array = [];
            for (let j = 0; j < 10; j++) {
                let random = Math.floor(Math.random() * 100 + 1);
                array.push(random);
            }
            document.getElementById("arrayStampato").innerHTML += `<div class="py-3">Array ${i}: ${array}</div>`;
            i++;
        }
    }
);