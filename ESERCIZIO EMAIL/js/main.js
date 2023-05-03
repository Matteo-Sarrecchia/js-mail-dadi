// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// variabili globali
const container = document.getElementById("container");
let tipoEmail;

// chiedere email 
const email = prompt("Inserisci la tua email");
console.log(email);

// crea array con lista email della gente che puo accedere
const listEmail = ["ciao", "ciao@gmail.it", "matteo@gmail.it", "viola@gmail.it", "andrea@gmail.it"]

// verificare se l'email è presente nella lista
for (let i = 0; i < listEmail.length; i++){

    tipoEmail = listEmail[i];

    if (email === tipoEmail){

        console.log("ok ci sta");
        const ris=document.createElement("div");
        container.append(ris);
        ris.append("Email presente nella lista, puoi entrare.")
    
    } else console.log("email non esiste");
        const ris=document.createElement("div");
        container.append(ris);
        ris.append("Email NON presente nella lista, NON puoi entrare.")
}

