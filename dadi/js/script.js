// DADI
/* 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Variabile per collegare il css presente nel DOM (collegamento del bottone)
const amBtn = document.getElementById("am-btn")

// Variabili per identificare l'utente e il computer per il lancio dei dadi
let userNumber;
let computerNumber;
// Variabile risultato finale
let resultMessage;

// Genero un numero random da 1 a 6, sia per il giocatore sia per il computer.
amBtn.addEventListener("click",
    function () {
        // Genero un numero random per il giocatore
        userNumber = Math.floor(Math.random() * 6) + 1;
        // Genero un numero random per il computer
        computerNumber = Math.floor(Math.random() * 6) + 1;

        // Stampo il risultato dei dadi ottenuto del giocatore e del computer       
        document.getElementById('user-number').innerHTML = userNumber;
        document.getElementById('computer-number').innerHTML = computerNumber;

        // Stabilire un vincitore in base al punteggio ottenuto
        // SE il giocatore ha il punteggio più alto del computer, il giocatore vince
        // ALTRIMENTI SE il computer ha il punteggio più alto del giocatore, il giocatore perde
        // ALTRIMENTI se il punteggio è pari il risultato è "Pareggio"
        if (userNumber > computerNumber) {
            resultMessage = "Hai vinto!";
        } else if (userNumber < computerNumber) {
            resultMessage = "Hai perso!";
        } else {
            resultMessage = "Pareggio";
        };
        
        // Stampo il risultato ottenuto dal giocatore
        document.getElementById('result-message').innerHTML = resultMessage;
    }
);

