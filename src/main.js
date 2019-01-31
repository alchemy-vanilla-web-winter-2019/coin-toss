import coinFlip from './coin-flip.js';

const coinPic = document.getElementById('coin-pic');
const flipForm = document.getElementById('flip-form');

flipForm.addEventListener('submit', function    (event) {
    event.preventDefault();
    const randomNumber = Math.random();
    const flipResult = coinFlip(randomNumber);

    if(flipResult === 'heads') {
        coinPic.src = '../assets/heads.jpeg';
    }
    else {
        coinPic.src = '..assets/tails.jpeg';
    }
})
