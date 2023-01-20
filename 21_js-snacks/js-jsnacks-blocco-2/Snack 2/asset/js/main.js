//Generare una lista di nomi e cognomi casuali

//Dichiaro le variabili
const nomi = ["Valentino", "Luca", "Simone", "Rocco", "Gianluca", "Riccardo"];
const cognomi = ["Rossi", "Frani", "Bolognesi", "Ricciardi", "Luongo", "Visone"];
let inviti = [];
let nomeIntero;

//Abbino nome e cognome scandendo la lista
for (i = 0; i < nomi.length; i++){
    for (j = 0; j < cognomi.length; j++){
        let nomeIntero = `${nomi[i]} ${cognomi[j]}`;
        inviti.push(nomeIntero);       
    }   
}

//Mescolo la lista degli invitati in maniera tale da generare un elenco random ogni volta
for (i = 0; i < inviti.length; i++){
    let j = Math.floor(Math.random() * i);
    let tmp = inviti[i];
    inviti[i] = inviti[j];
    inviti[j] = tmp;   
}

//Stampo la lista disordinata di invitati
for (i = 0; i < inviti.length; i++){
    document.getElementById("invitiLista").innerHTML += `<div class="elenco">${inviti[i]}</div>`;
}