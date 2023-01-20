// Dichiaro l'array
let mail = ["valentino.destefano46@gmail.com", "pincopallo@hotmail.com", "gino.libero@gmail.com"]
console.log(mail);

let button = document.getElementById("mailButton");

let form = document.getElementById("mailForm");

button.addEventListener("click",
    function(){
        let mailPersonale = prompt("Inserisci la tua e-mail:");
        if ( mailPersonale.length == 0){
                alert("Attenzione! Inserisci correttamente la tua e-mail!");
                return;
            }
        let mailTrovata = false;

        for (let i=0; i < mail.length; i++){
            if ( mailPersonale == mail[i]){
                mailTrovata = true;
            }
        }

        if ( mailTrovata == true){
                document.getElementById("mailCamp").innerHTML = `<div class="p-2 border rounded-2">${mailPersonale}</div>`;
                form.classList.remove("d-none");
        } else{
                alert("Non risulti registrato, corri a farlo!");
                return;
        }
    }
);



