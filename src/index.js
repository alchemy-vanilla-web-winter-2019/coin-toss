import flipIt from './flip-it.js';
const flipForm = document.getElementById('flip-form');



flipForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();
    console.log(randomNumber);

});