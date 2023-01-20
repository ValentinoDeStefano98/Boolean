//Inizializzo l'array di oggetti
let listaTeam = [
    {
        'Img': 'wayne-barnett-founder-ceo.jpg',
        'Nome': 'Wayne Barnett',
        'Ruolo': 'Founder & CEO'
    },
    {
        'Img': 'angela-caroll-chief-editor.jpg',
        'Nome': 'Angela Caroll',
        'Ruolo': 'Chief Editor'
    },
    {
        'Img': 'walter-gordon-office-manager.jpg',
        'Nome': 'Walter Gordon',
        'Ruolo': 'Office Manager'
    },
    {
        'Img': 'angela-lopez-social-media-manager.jpg',
        'Nome': 'Angela Lopez',
        'Ruolo': 'Social Media Manager'
    },
    {
        'Img': 'scott-estrada-developer.jpg',
        'Nome': 'Scott Estrada',
        'Ruolo': 'Developer'
    },
    {
        'Img': 'barbara-ramos-graphic-designer.jpg',
        'Nome': 'Barbara Ramos',
        'Ruolo': 'Graphic Designer'
    },
];

//Stampo gli oggetti
for (let key in listaTeam){
    console.log(listaTeam[key]);
}

//Stampo le card degli oggetti
for (let i = 0; i < listaTeam.length; i++){
    document.getElementById("teamContainer").innerHTML +=
    `
    <div class="card cursor zoom" style="width: 18rem;">
                <img src=asset/img/${listaTeam[i]["Img"]} class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5 class="card-title">${listaTeam[i]["Nome"]}</h5>
                    <p class="card-text">${listaTeam[i]["Ruolo"]}</p>
                </div>
        </div>
    `
}