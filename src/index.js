import headsOrTails from '../test/heads-tails.js';
const image = document.getElementById('coin-image');

const button = document.getElementById('coin-button');

button.addEventListener('submit', function(event) {
    event.preventDefault();
    const randomNumber = Math.random();
    let side = headsOrTails(randomNumber);
    if(side === 'heads') {
        image.src = './assets/heads.jpg';
    }
    else {
        image.src = './assets/tails.jpg';

    }



    image.classList.remove('hidden');

});