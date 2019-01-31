import flipCoin from './coin-flip.js';

const radioForm = document.getElementById('radio-form');
const image = document.getElementById('coin-pic');
const headsNode = document.getElementById('heads-count');
const tailsNode = document.getElementById('tails-count');


let headsCount = 0;
let tailsCount = 0;

radioForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();
    const coinSide = flipCoin(randomNumber);
    let imageSource = '';

    if(coinSide === 'heads') {
        imageSource = '../assets/heads.jpg';
        headsCount++;
        headsNode.textContent = headsCount;

    }
    else {
        imageSource = '../assets/tails.jpg';
        tailsCount++;
        tailsNode.textContent = tailsCount;
    }
    image.src = imageSource;
    image.classList.remove('hidden');
});
