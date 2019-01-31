import headsTails from './heads-tails.js';
const tossForm = document.getElementById('toss-form');
const coinImage = document.getElementById('coin-image');
const headsCountSpan = document.getElementById('heads-count');
const tailsCountSpan = document.getElementById('tails-count');

let headsCount = 0;
let tailsCount = 0;

tossForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const randomNumber = Math.random();
    const face = headsTails(randomNumber);
    coinImage.src = '../assets/' + face + '.jpg';
    coinImage.classList.remove('hidden');
    if(face === 'heads') {
        headsCount++;
        headsCountSpan.textContent = headsCount;
    } 
    else {
        tailsCount++;
        tailsCountSpan.textContent = tailsCount;
    }
});