import coinToss from '../src/cointoss.js';

const coinForm = document.getElementById('toss-coin-button');
const image = document.getElementById('coin-image');
const result = document.getElementById('results');

coinForm.addEventListener('submit', function(event) {
    event.preventDefault();
    //console.log('button pressed');

    const randomNumber = Math.random();
    console.log(randomNumber);

    const coin = coinToss(randomNumber);


});