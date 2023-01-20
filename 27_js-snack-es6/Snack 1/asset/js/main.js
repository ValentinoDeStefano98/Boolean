//Creare un array di oggetti di bici da corsa con due proprietà, nome e peso
//Stampare  a schermo la bici con peso minore utilizzando destructuring e template literal
let listaBici = [
    {
        'Nome': 'Wilier Jareen Grx',
        'Peso': 12
    },
    {
        'Nome': 'Trek Domane',
        'Peso': 11
    },
    {
        'Nome': 'Kona Sutra',
        'Peso': 13.9
    },
    {
        'Nome': 'Megamo Jakar',
        'Peso': 11.5
    },
    {
        'Nome': 'Fantic Seven Days Living Urban',
        'Peso': 14
    },
    {
        'Nome': 'Trek Émonda',
        'Peso': 9.8
    },
];

//Ciclo per estrarre il peso minore
let pesoMinore = listaBici[0];
for (let i = 0; i < listaBici.length; i++){
    let x = listaBici[i];
    if (pesoMinore['Peso'] > x['Peso']){
        pesoMinore = x;
    }
}
console.log(pesoMinore);

document.getElementById("bike").innerHTML =
`
<div> Bici: ${pesoMinore.Nome} </div>
<div> Peso: ${pesoMinore.Peso} </div>
`;


