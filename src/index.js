import headsTails from './heads-tails.js';
const flipForm = document.getElementById('flip-form');
const unicornImage = document.getElementById('unicorn-image');
const headsCount = document.getElementById('heads-count');
const tailsCount = document.getElementById('tails-count');

let heads = 1;
let tails = 1;

flipForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();
    const coin = headsTails(randomNumber);
    let unicornImageSrc = '';
    
    if(coin === 'heads') {
        unicornImageSrc = '../assets/heads.jpg';
        headsCount.textContent = heads++;
    } else {
        unicornImageSrc = '../assets/tails.jpg';
        tailsCount.textContent = tails++;
    }

    unicornImage.src = unicornImageSrc;
});
