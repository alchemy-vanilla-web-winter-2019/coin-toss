import headsOrTails from './heads-or-tails.js';

const flipForm = document.getElementById('flip-form');
const faceImage = document.getElementById('face-image');

flipForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();
    const face = headsOrTails(randomNumber);
    let faceImageSrc = '';

    if(face === 'heads') {
        faceImageSrc = '../assets/heads.jpg';
    } else {
        faceImageSrc = '../assets/tails.jpg';
    }
    faceImage.src = faceImageSrc;
    faceImage.classList.remove('hidden');
});