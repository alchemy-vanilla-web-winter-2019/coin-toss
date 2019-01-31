import headsTails from './heads-tails.js';
const flipForm = document.getElementById('flip-form');
const imageContainer = document.getElementById('image-container');
const faceImage = document.getElementById('face-image');
const headsCounter = document.getElementById('heads-counter');
const tailsCounter = document.getElementById('tails-counter');

let heads = 0;
let tails = 0;


flipForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const faceValue = headsTails(Math.random());
    if(faceValue === 'Heads') {
        faceImage.src = '../assets/Heads.jpg';
        heads++;
        headsCounter.textContent = heads;
    } else {
        faceImage.src = '../assets/Tails.jpg';
        tails++;
        tailsCounter.textContent = tails;
    }


    



    
});