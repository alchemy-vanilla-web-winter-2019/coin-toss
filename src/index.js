import flipIt from './flip-it.js';
const flipForm = document.getElementById('flip-form');
const flipImage = document.getElementById('flip-image');


flipForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();

    const tossResult = flipIt(randomNumber);
    console.log(tossResult);
    
    
    let imageSource = '';
    if(tossResult === 'heads') {
        imageSource = '../assets/cowhead.jpg';
    } else {
        imageSource = '../assets/cowbutt.gif';
    }

    flipImage.src = imageSource;
    flipImage.classList.remove('hidden');
});

