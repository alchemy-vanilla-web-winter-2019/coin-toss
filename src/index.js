import headsOrTails from './heads-or-tails.js';

const flipForm = document.getElementById('flip-form');
const faceImage = document.getElementById('face-image');
const headsCount = document.getElementById('heads-count');
const tailsCount = document.getElementById('tails-count');
const counts = document.getElementById('counts');
const status = document.getElementById('status');

let heads = 0;
let tails = 0;
flipForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();
    const face = headsOrTails(randomNumber);
    let faceImageSrc = '';

    if(face === 'heads') {
        faceImageSrc = '../assets/heads.jpg';
        heads++;
        status.textContent = 'Heads!';
    } else {
        faceImageSrc = '../assets/tails.jpg';
        tails++;
        status.textContent = 'Tails!';
    }
    faceImage.src = faceImageSrc;
    faceImage.classList.remove('hidden');

    headsCount.textContent = heads;
    tailsCount.textContent = tails;
    counts.classList.remove('hidden');
});