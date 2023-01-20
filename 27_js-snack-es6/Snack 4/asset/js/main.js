let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
];

//Creo un nuovo array utilizzando map e aggiungendo i nomi degli studenti ma in maiuscolo
const arrayNomi = students.map(
    (element) => element.name.toUpperCase()
);
console.log(arrayNomi);

//Creo un nuovo array in cui inserisco gli studenti con un voto superiore a 70
const arraySettanta = students.filter(
    (element) => {
        if (element.grades > 70){
            return true;
        }
        return false;
    }
);
console.log(arraySettanta);

//Creo un nuovo array in cui inserisco gli studenti con voto superiore a 70 e id maggiore di 120
const arrayFinale = students.filter(
    (element) => {
        if (element.grades > 70 && element.id > 120){
            return true;
        }
        return false;
    }
);
console.log(arrayFinale);