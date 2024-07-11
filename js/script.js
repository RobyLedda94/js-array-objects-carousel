// recupero gli elementi dal dom
let items = document.getElementById('items');
let thumbs = document.getElementById('thumbs');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');




// array di oggetti che contiene i dati per il carosello
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



// itero con il ciclo ogni prorpeità dell'array


images.forEach((image) => {
    console.log(image);
    items.innerHTML += 
    `   <div id="item" class="active d-none">
            <img src="${image.image}" alt="spiderman">
        </div>
    `

})

// definisco l'indice dell'elemnto in ordine di vis

let activeElement = 0;

// recupero gli elementi con classe active

const active = document.querySelectorAll('.active');

// recupero il primo elemento dell'array images e gli rimuovo la classe d-none

active[activeElement].classList.remove('d-none');