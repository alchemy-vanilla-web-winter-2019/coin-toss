import headsTails from './heads-tails.js';
const tossForm = document.getElementById('toss-form');

tossForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('form submitted');  
    const randomNumber = Math.random;
    const face = headsTails(randomNumber);
    console.log(face);
});