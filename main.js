"use strict";

// Funzione per aprire l'immagine a schermo intero
function openFullscreenImg() {
    let img = document.getElementById('myImg');
    let fullscreenImg = document.getElementById('fullscreenImg');

    fullscreenImg.style.display = 'block'; // Mostra l'immagine a schermo intero
    fullscreenImg.innerHTML = "<img src='" + img.src + "'>"; // Inserisce l'immagine nell'elemento fullscreenImg
}

// Funzione per chiudere l'immagine a schermo intero
function closeFullscreenImg() {
    let fullscreenImg = document.getElementById('fullscreenImg');
    fullscreenImg.style.display = 'none'; // Nasconde l'immagine a schermo intero
    fullscreenImg.innerHTML = ""; // Rimuove l'immagine dall'elemento fullscreenImg
}

function addAnimation() {
    let button = document.querySelector('#cv-downloader');
    button.classList.remove('animate__rubberBand');
    setTimeout(function () {
        button.classList.add('animate__rubberBand');
    }, 10);
}