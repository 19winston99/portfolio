"use strict";

// Funzione per aprire l'immagine a schermo intero
function openFullscreenImg() {
    var img = document.getElementById('myImg');
    var fullscreenImg = document.getElementById('fullscreenImg');

    fullscreenImg.style.display = 'block'; // Mostra l'immagine a schermo intero
    fullscreenImg.innerHTML = "<img src='" + img.src + "'>"; // Inserisce l'immagine nell'elemento fullscreenImg
}

// Funzione per chiudere l'immagine a schermo intero
function closeFullscreenImg() {
    var fullscreenImg = document.getElementById('fullscreenImg');
    fullscreenImg.style.display = 'none'; // Nasconde l'immagine a schermo intero
    fullscreenImg.innerHTML = ""; // Rimuove l'immagine dall'elemento fullscreenImg
}