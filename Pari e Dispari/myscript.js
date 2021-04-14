// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.





var pariDispari = prompt("Inserisci pari o dispari ");
var exist;
var umano = parseInt(prompt("Inserisci un numero da 1 a 5"));
var macchina;
var somma;




if (pariDispari == "pari") {
    exist = true;
    console.log("l'utente ha scelto pari")
}
else if (pariDispari == "dispari") {
    exist = false;
    console.log("l'utente ha scelto dispari")
}
else {
    alert("Inserire correttamente la parola pari o dispari");
}


if (Number.isNaN(umano)) {
    console.log("Inserire solo numeri da 1 a 5")
}
else {
    console.log("il numero del giocatore è " + umano);
    // GENERA NUMERO RANDOM TRAMITE FUNZIONE
    macchina = numeroRandom();
    console.log("il numero del pc è " + macchina);

    //SOMMA 
    somma = umano + macchina;
    console.log("la somma è " + somma);

    // VERIFICA TRAMITE LA NOSTRA FUNZIONE SE LA SOMMA E' PARI O DISPARI
    if (pari(somma) == exist) {
        console.log("l'utente ha vinto");
    }
    else {
        console.log("l'utente ha perso");
    }
}

// FUNZIONI
function numeroRandom() {
    var numero;
    numero = Math.floor(Math.random() * 5 + 1);
    parseInt(numero);
    return numero;
}


function pari(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}




