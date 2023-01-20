//Array dei nomi
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

//Chiedo all'utente di inserire due numero che poi verrà utilizzato per l'aggiunta degli elementi in base al loro indice
let posMin = parseInt(prompt("Inserisci il numero minimo compreso fra 1 e 5"));
convalidaNumeroMinimo(posMin);
let posMax = parseInt(prompt("Inserisci il numero massimo compreso fra 1 e 5 (deve essere più grande del numero inserito precedentemente!)"));
convalidaNumeroMassimo(posMax);

 //Convalide dei dati inseriti
function convalidaNumeroMinimo (){
    while (posMin < 1 || posMin > 5){
        alert("Attenzione! Inserisci un numero valido!");
        posMin = parseInt(prompt("Inserisci il numero minimo compreso fra 1 e 5"));
    }  
}

function convalidaNumeroMassimo (){
    while (posMax < 1 || posMax > 5 || posMax < posMin){
        alert("Attenzione! Inserisci un numero valido!");
        posMax = parseInt(prompt("Inserisci il numero massimo compreso fra 1 e 5 (deve essere più grande del numero inserito precedentemente!)"));
    }  
}

//Soluzione con forEach
let nuovoArray = [];

myArray.forEach((element, index) => {
    if (index >= posMin && index <= posMax){
        nuovoArray.push (element);
    }
});
console.log(nuovoArray);

//Soluzione con Filter
const ArrayFiltrato = myArray.filter((element, index) => index >= posMin && index <= posMax
);
console.log(ArrayFiltrato);