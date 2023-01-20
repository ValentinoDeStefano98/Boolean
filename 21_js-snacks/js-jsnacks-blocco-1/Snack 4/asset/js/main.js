let lista = ["Marco", "Luca", "Giovanni", "Valentino", "Antonio", "Paolo"];

let button = document.getElementById("invito");

button.addEventListener("click",

function(){
    let nomeInvitato = prompt("Inserisci il tuo nome e verifica il tuo invito!");
    console.log(nomeInvitato);

    if (lista.includes(nomeInvitato)){
        document.getElementById("accesso").innerHTML = `Benissimo, ${nomeInvitato}! Risulti invitato alla festa, non vediamo l'ora di incontrarti!`;
    } else {
        document.getElementById("accesso").innerHTML = `Siamo spiacenti, non risulti invitato alla festa!`;
    }
}

);

