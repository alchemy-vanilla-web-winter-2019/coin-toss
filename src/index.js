import headsOrTails from './heads-or-tails.js';

const flipForm = document.getElementById('flip-form');
const faceImage = document.getElementById('face-image');
const headsCount = document.getElementById('heads-count');
const tailsCount = document.getElementById('tails-count');

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
    } else {
        faceImageSrc = '../assets/tails.jpg';
        tails++;
    }
    faceImage.src = faceImageSrc;
    faceImage.classList.remove('hidden');
    headsCount.textContent = heads;
    tailsCount.textContent = tails;
});