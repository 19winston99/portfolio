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

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".animated-element").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "restart none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });
});

const checkbox = document.getElementById('dark-mode');
const descriptions = document.querySelectorAll('.black');
const contacts = document.querySelector('.table');

checkbox.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('dark-mode');
    descriptions.forEach(function (element) {
      element.classList.add('text-black');
    })
    contacts.classList.add('bg-light-subtle')
  } else {
    document.body.classList.remove('dark-mode');
    descriptions.forEach(function (element) {
      element.classList.remove('text-black');
    })
    contacts.classList.remove('bg-light-subtle')

  }
});