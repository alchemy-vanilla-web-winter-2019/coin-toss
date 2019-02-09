import queenOrFreddie from './queen-freddie.js';

const clickForm = document.getElementById('click-form');
let image = document.getElementById('cat-image');
let queen = document.getElementById('queen');
let freddie = document.getElementById('freddie');
let queenCatCounter = 0;
let freddieCatCounter = 0;

clickForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();

    let catType = queenOrFreddie(randomNumber);
    let imageSource = '';
    if(catType === 'queen') {
        imageSource = '../assets/queen.jpg';
    } else {
        imageSource = '../assets/freddie.jpg';
    } 

    image.src = imageSource;
});