/* 
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/


// Chiedi all’utente la sua email
const userEmail = prompt("Scrivi la tua email:");

// Elenco email messi in una variabile con un Array
const emailList = ["andrea@gmail.com", "mario@gmail.com", "pietro@gmail.com", "marco@gmail.com", "giuseppe@gmail.com", "alessandro@gmail.com", "chiara@gmail.com", "daniele@gmail.com"];

let addEmail;

let verifyEmail = false;

// Inizio un ciclo "for" per cercare nella lista "emailList"
for (let i = 0; i < emailList.length; i++) {
    addEmail = emailList[i];

    // Controllo l'email dell'utente se è presente nella lista "emailList"
    if (userEmail === addEmail) {
        // SE l'email è presente nell'Array il risultato di "verifyEmail" sarà "true" ALTRIMENTI resta "false" dalla variabile di default
        verifyEmail = true;
    };
};

// Stampo il messaggio del risultato ottenuto
if (verifyEmail) {
    alert("La tua email è corretta!");
} else {
    alert("La tua email non è corretta. Verifica di aver digitato correttamente la tua email!");
};