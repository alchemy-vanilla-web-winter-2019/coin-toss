import headsTails from './heads-tails.js';

const button = document.getElementById('coin-button');
const image = document.getElementById('coin-image');
const result = document.getElementById('result');

let head = 0;
let tail = 0;

button.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();

    const side = headsTails(randomNumber);

    if(side === 'heads') {
        image.src = './assets/libertycoin.jpg';
        result.textContent = 'Heads!';
        head++;
    }
    else {
        image.src = './assets/tails.gif';
        result.textContent = 'Tails!';
        tail++;
    }

    image.classList.remove('hidden');
});