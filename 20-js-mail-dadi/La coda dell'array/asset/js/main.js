// Primo esercizio bonus
let array = [1, 3, 5, 7, 6, 8, 5, 3, 4, 5, 6, 1];

for (i = 0; i < array.length; i++) {
    document.getElementById("initialArray").innerHTML += `<div class="p-3">${array[i]}</div>`;
}

for (i = array.length - 5; i < array.length; i++) {
    document.getElementById("finalArray").innerHTML += `<div class="p-3">${array[i]}</div>`;
}

// Secondo esercizio bonus
let buttonArray = document.getElementById("arrayGenerator");

let arrayVuoto = [];

buttonArray.addEventListener("click",
    function () {
        let numeroElementi = prompt("Quanti elementi deve contenere la lista?");
        if (numeroElementi <= 0) {
            alert("Attenzione! Inserisci un valore corretto!");
        }
        for (let i = 0; i < numeroElementi; i++) {
            let elementoCasuale = Math.floor(Math.random() * 99999);
            arrayVuoto[i] = elementoCasuale;
            document.getElementById("secondArray").innerHTML += `<div class="p-3">${arrayVuoto[i]}</div>`;
        }
        
    }
);

// Terzo esercizio bonus
let buttonElements = document.getElementById("elementExtract");

buttonElements.addEventListener("click",
    function () {
        if (arrayVuoto.length == 0) {
            alert("Attenzione, inserisci prima i valori per creare l'array");
            return;
        }
        let numeroEstratti = prompt("Quanti elementi vuoi estrarre dal fondo della lista?");
        for (i = (arrayVuoto.length - numeroEstratti); i < arrayVuoto.length; i++) {
            document.getElementById("thirdArray").innerHTML += `<div class="p-3">${arrayVuoto[i]}</div>`;
        }
    }
);