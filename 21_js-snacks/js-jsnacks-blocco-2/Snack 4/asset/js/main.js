//Creare due array con un numero diverso di elementi. Poi aggiungere gli elementi all'array con un contenuto minore fin quando la dimensione dei due array non risulti uguale

//Inizializzo i due array ed il bottone
let array1 = [2, 4, 56, 7, 3, 6, 2, 6, 8, 6, 3, 2, 4, 45, 42];
let array2 = [4, 7, 2, 56, 456, 89];
let button = document.getElementById("buttonArray");
//Stampo i due array
document.getElementById("firstArray").innerHTML = `Ecco il primo array: ${array1}`;
document.getElementById("secondArray").innerHTML = `Ecco il secondo array: ${array2}`;

button.addEventListener("click",
    function(){
        for (i = array2.length; i < array1.length; i++){
            if (array2.length < array1.length){
                nuovoElemento = prompt("Inserisci un altro elemento");
                array2.push(nuovoElemento);
            }
        }
    document.getElementById("lastArray").innerHTML = `Ecco il secondo array con lo stesso numero di elementi del primo: ${array2}`;
    }
);