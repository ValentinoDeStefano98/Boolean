/*
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le infomrazioni necessarie per stampare la relativa card:
-id del post, numero progressivo da 1 a n
-nome autore
-foto autore
-data in formato americato (mm-gg-yyyy)
-testo del post
-immagine (non tutti i post devono avere una immagine)
-numero di likes
Non è necessario creare date casuali
*/

//Creo l'array degli oggetti
let array = [{
        'id': 1,
        'autore': {
            'nome': 'Gennaro Esposito',
            'foto': null
        },
        'likes': 45,
        'created': '2021-06-12',
        'media': 'https://unsplash.it/600/400?image=15',
        'content': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sit eum obcaecati rem ducimus odio quis voluptas possimus fugiat earum esse iusto dolorem, ea hic porro dolores quasi voluptatibus consectetur!'
    },
    {
        'id': 2,
        'autore': {
            'nome': 'Calogero Martorana',
            'foto': 'https://unsplash.it/300/300?image=17'
        },
        'likes': 130,
        'created': '2021-06-23',
        'media': 'https://unsplash.it/600/400?image=25',
        'content': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sit eum obcaecati rem ducimus odio quis voluptas possimus fugiat earum esse iusto dolorem, ea hic porro dolores quasi voluptatibus consectetur!'
    },
    {
        'id': 3,
        'autore': {
            'nome': 'Renato RanaMarziana',
            'foto': 'https://unsplash.it/300/300?image=18'
        },
        'likes': 2000,
        'created': '2021-06-22',
        'media': 'https://unsplash.it/600/400?image=35',
        'content': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sit eum obcaecati rem ducimus odio quis voluptas possimus fugiat earum esse iusto dolorem, ea hic porro dolores quasi voluptatibus consectetur!'
    },
    {
        'id': 4,
        'autore': {
            'nome': 'Mario Maria Mario',
            'foto': 'https://unsplash.it/300/300?image=19'
        },
        'likes': 75,
        'created': '2021-06-20',
        'media': 'https://unsplash.it/600/400?image=55',
        'content': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sit eum obcaecati rem ducimus odio quis voluptas possimus fugiat earum esse iusto dolorem, ea hic porro dolores quasi voluptatibus consectetur!'
    },
    {
        'id': 5,
        'autore': {
            'nome': 'Sono Mimmo',
            'foto': 'https://unsplash.it/300/300?image=22'
        },
        'likes': 350,
        'created': '2021-06-05',
        'media': 'https://unsplash.it/600/400?image=65',
        'content': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sit eum obcaecati rem ducimus odio quis voluptas possimus fugiat earum esse iusto dolorem, ea hic porro dolores quasi voluptatibus consectetur!'
    },
    {
        'id': 6,
        'autore': {
            'nome': 'Dottoressa Caccavera',
            'foto': 'https://unsplash.it/300/300?image=50'
        },
        'likes': 300,
        'created': '2021-06-10',
        'media': 'https://unsplash.it/600/400?image=75',
        'content': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sit eum obcaecati rem ducimus odio quis voluptas possimus fugiat earum esse iusto dolorem, ea hic porro dolores quasi voluptatibus consectetur!'
    }
]

/*
Stampo tutti gli oggetti all'interno del DOM
*/

let container = document.getElementById("containerCards");

//Utilizzo di forEach
array.forEach(
    (element, index, array) => {
        //ottengo il singolo oggetto
        //Stampo l'elemento nel DOM
        container.innerHTML +=
            `
            <div class="card">
                <div class="card-header">
                    ${controlloImmagine(element)}
                    <div class="card-header__autoreInfo">
                        <h4>${element.autore.nome}</h4>
                        <span>${trasformazioneData(element)}</span>
                    </div>   
                </div>
                <p class="card-body__content">
                    ${element.content}
                </p>
                <img src="${element.media}" class="card-body__full" alt="immagine post">
                <div class="card-footer">
                    <button class="btn js-like-button pointer zoom" data-id="${element.id}"><i class="fa-solid fa-thumbs-up"></i> Mi piace</button>
                    <p>Piace a <span class="js-like-counter">${element.likes}</span> persone</p>
                </div>
            </div>
        `
    }
);
//<img src="${element.autore.foto}" class="card-header__img" alt="foto di ${element.autore.nome}">

//Funzione per controllare se l'autore ha oppure no un'immagine di profilo
function controlloImmagine(element) {
    if (element.autore.foto == null) {
        return estrarreIniziali(element);
    } else {
        return `<img src="${element.autore.foto}" class="card-header__img" alt="foto di ${element.autore.nome}">`
    }
};

//Funzione per estrarre le iniziali di nome e cognome dell'autore e stamparle se non è presente un'immagine del profilo
function estrarreIniziali(element) {
    //Estrarre le iniziali dell'autore e stamparle in un cerchio colorato
    let nomeAutore = element.autore.nome;
    let arrayNomeAutore = nomeAutore.split(' ');

    let arrayInizialiAutore = [];

    arrayNomeAutore.forEach(
        (element) => {
            let iniziali = element[0];
            arrayInizialiAutore.push(iniziali);
        }
    )
    let stringaJoinIniziali = arrayInizialiAutore.join('');

    return `<div class="card-header_img-circle"><span>${stringaJoinIniziali}</span></div>`
}

//Formatto le date in formato italiano con una funzione
function trasformazioneData(element) {
    let dataAmericana = element.created;
    let dataItaliana = dataAmericana.split('-').reverse().join('-');
    return `<span>${dataItaliana}</span>`;
}

//Se clicco sul tasto like il bottone si colora di verde e aggiunge il like al numero totale visualizzato sul post
//Utilizzo i query selector per selezionare i bottoni dei like e il numero dei mi piace da incrementare
const likeButtons = document.querySelectorAll(".js-like-button");
const likeCounters = document.querySelectorAll(".js-like-counter");
let likedPost = [];

//Ciclo per aggiungere il colore al bottone e incrementare il numero dei likes
likeButtons.forEach(
    (element, index) => {
        element.addEventListener('click', function (e) {
            const counter = likeCounters[index];
            let clickedCounter = parseInt(counter.innerHTML);
            const currentId = array[index].id;
            if (element.classList.contains("liked")) {
                element.classList.remove("liked");
                clickedCounter--;
                likedPost = likedPost.filter((element) => element != currentId); 
            } else {
                element.classList.add("liked");
                clickedCounter++;
                likedPost.push(currentId);
            }
            counter.innerHTML = clickedCounter;
        });
    }
)