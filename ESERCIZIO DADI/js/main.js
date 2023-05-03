// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// variabili globali
const container = document.getElementById("container")


// generare numero random giocatore
const numComputer = Math.floor(Math.random()*7);
console.log(numComputer);


// generare numero random computer
const numGiocatore = Math.floor(Math.random()*7);
console.log(numGiocatore);

if (numComputer < numGiocatore) {
    console.log("Vittoria Giocatore")
    const square = document.createElement("div")
    container.append(square);
    square.append("Winner")

} if (numComputer > numGiocatore) {
    console.log("Vittoria Computer")
    const square = document.createElement("div")
    container.append(square);
    square.append("Loser")

} if (numComputer == numGiocatore) {
    console.log("Pareggio")
    const square = document.createElement("div")
    container.append(square);
    square.append("Pareggio")
}