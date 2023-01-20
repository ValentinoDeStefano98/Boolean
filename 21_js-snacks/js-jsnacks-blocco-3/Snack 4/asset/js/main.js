//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. Interrompi il ciclo appena il nome è stato trovato.

let lista = ["Modestino Arpa", "Abdelhamid Ayadi" ,"Andrea Bellucci","Alberto Biga","Vincenzo Borriello","Gerardo Calia" ,"Luca Carbone","Tancredi Carluccio","Valentino De Stefano","Ludovica Di Benedetto","Davide Di Pietro","Nizar Fergag","Alessandro Fonzi","Gabriele Magni" ,"Stefano Maiorchini","Angelo Melotti","Caterina Moccia","Sergio Nifosi","Clara Nocilla","Matteo Nuvoloni","Simone Pavone" ,"Noemi Pintaldi","Roberto Piva","Andrea Pontillo","Andrea Rosellini","Simone Saputo" ,"Samuele Spadaro" ,"Vera Sprinceana","Ivan Toselli","Michael Wachnicki","Simone Luca Zaino","Francesco Natoli"];

let button = document.getElementById("invito");

//Soluzione con for
/*
for (i = 0; i < lista.length; i++){
    if (nomeCompleto == lista[i]){
        console.log("Sei invitato!");
        break;
    } else {
        console.log("Non risulti invitato!")
    }
}
*/

//Soluzione con while
button.addEventListener("click",
    function(){
        let nome = prompt("Inserisci il tuo nome");
        let cognome = prompt("Inserisci il tuo cognome");
        let nomeCompleto = nome + " " + cognome;
        console.log(nomeCompleto);
        let i = 0;
        while (i < lista.length){
            if (nomeCompleto == lista[i]){
                document.getElementById("accesso").innerHTML = ("Sei invitato alla festa!");
                break;
            } else {
                document.getElementById("accesso").innerHTML = ("Non sei invitato alla festa!");
            }
            i++;
        }   
    }
);