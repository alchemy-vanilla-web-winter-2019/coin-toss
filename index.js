import queenOrFreddie from './queen-freddie.js';

const clickForm = document.getElementById('click-form');
let image = document.getElementById('cat-image');
let queenCount = document.getElementById('queen');
let freddieCount = document.getElementById('freddie');
let queenCatCounter = 0;
let freddieCatCounter = 0;

clickForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();

    let catType = queenOrFreddie(randomNumber);
    let imageSource = '';
    if(catType === 'queen') {
        imageSource = '../assets/queen.jpg';
        queenCatCounter++;
        queenCount.textContent = queenCatCounter;
    } else {
        imageSource = '../assets/freddie.jpg';
        freddieCatCounter++;
        freddieCount.textContent = freddieCatCounter;
    } 

    image.src = imageSource;
});