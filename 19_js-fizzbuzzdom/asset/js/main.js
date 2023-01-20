//seleziono il container
let container = document.getElementById("containerNumber");

for (let i = 1; i<= 1000; i++){
    //condizione per verificare se il numero è multiplo di 3 e 5 
    if ((i % 3 == 0) && (i % 5 == 0)){
        //cambio colore al div ed aggiunta del testo
        container.innerHTML += `<div class="squareFizzBuzz number cursor zoom">FizzBuzz</div>`;
    //condizione per verificare se il numero è multiplo di 5    
    } else if(i % 5 == 0){
        //cambio colore al div ed aggiunta del testo
        container.innerHTML += `<div class="squareBuzz number cursor zoom">Buzz</div>`;
    //condizione per verificare se il numero è multiplo di 3
    } else if(i % 3 == 0){
        //cambio colore al div ed aggiunta del testo
        container.innerHTML += `<div class="squareFizz number cursor zoom">Fizz</div>`;
    } else {
        //colore classico di partenza
        container.innerHTML += `<div class="number cursor zoom">${i}</div>`;
    }
}