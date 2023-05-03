// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// variabili globali
const risultato = document.getElementById("risultato");
const giocatore = document.getElementById("giocatore");
const computer = document.getElementById("computer");

// generare numero random giocatore
const numGiocatore = Math.floor(Math.random()*7);
console.log(numGiocatore);
const squareGiocatore = document.createElement("div")
giocatore.append(squareGiocatore);
squareGiocatore.append("Numero giocatore  " + numGiocatore);

// generare numero random computer
const numComputer = Math.floor(Math.random()*7);
console.log(numComputer);
const squareComputer = document.createElement("div")
computer.append(squareComputer);
squareComputer.append("Numero computer  " + numComputer);

// condizione
if (numComputer < numGiocatore) {
    console.log("Vittoria Giocatore")
    const squareRisultato = document.createElement("span")
    risultato.append(squareRisultato);
    squareRisultato.append("Winner")
    // aggiunta classe
    squareRisultato.classList.add("vittoriaGiocatore");

} else if (numComputer > numGiocatore) {
    console.log("Vittoria Computer")
    const squareRisultato = document.createElement("span")
    risultato.append(squareRisultato);
    squareRisultato.append("Loser")
    // aggiunta classe
    squareRisultato.classList.add("vittoriaComputer");

} else if (numComputer == numGiocatore) {
    console.log("Pareggio")
    const squareRisultato = document.createElement("span")
    risultato.append(squareRisultato);
    squareRisultato.append("Pareggio")
    // aggiunta classe
    squareRisultato.classList.add("pareggio");
}