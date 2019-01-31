import gritShag from './gritShag.js';

//Variables for basic coin flip
const flipForm = document.getElementById('flip-form');
const image = document.getElementById('picture');

//Variables for win or lose
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const status = document.getElementById('status');
let wins = 0;
let losses = 0;


flipForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();
    const returned = gritShag(randomNumber);
    
    let imageSource = '';

    if(returned === 'Gritty') {
        imageSource = '../assets/Gritty.jpg';
    }
    else {
        imageSource = '../assets/shaggy.jpg';
    }

    image.src = imageSource;
    image.classList.remove('hidden');


    const userChoice = flipForm.elements.animal.value;
    if(userChoice === returned) {
        status.textContent = 'You win!';
        wins++;
        winCount.textContent = wins;
    }
    else {
        status.textContent = 'Booo you lose!';
        losses++;
        lossCount.textContent = losses;
    }

    


})
