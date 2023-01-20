/*Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare,
le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/
let listaSquadre = [
    {
        'Nome': 'Milan',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Napoli',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Inter',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Juventus',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Atalanta',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Roma',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Lazio',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Fiorentina',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Sassuolo',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Verona',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Torino',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Bologna',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Empoli',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Udinese',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Sampdoria',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Spezia',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Cagliari',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Venezia',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Genoa',
        'Punti': 0,
        'FalliSubiti': 0
    },
    {
        'Nome': 'Salernitana',
        'Punti': 0,
        'FalliSubiti': 0
    },
];
console.log(listaSquadre);
//Funzione per generare numeri random
function getRandom(num){
    return Math.floor(Math.random()*num);
}
//Aggiungo il valore random alla chiave Punti e Falli subiti
//Stampo le chiavi nome e falli subiti
for (let i = 0; i < listaSquadre.length; i++){
    listaSquadre[i].Punti = getRandom(80);
    listaSquadre[i].FalliSubiti = getRandom(90);
    let {Nome, FalliSubiti} = listaSquadre[i];
    document.getElementById("teams").innerHTML +=
    `<div class="py-2 teamContainer border border-dark m-2 d-flex flex-column align-items-center">
        <div> Squadra: ${Nome}</div>
        <div> Falli subiti: ${FalliSubiti}</div>
    </div>
    `
}

