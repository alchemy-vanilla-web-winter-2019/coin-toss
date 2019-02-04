import coinToss from './coin-toss.js';

const pickForm = document.getElementById('pick-form');
const image = document.getElementById('coin-image');

pickForm.addEventListener('submit', function(event){
    event.preventDefault();
    const randomNumber = Math.random();
    let face = coinToss(randomNumber);
    if(face === 'Heads') {
        image.src = '/assets/tails.jpeg';
    } else {
        image.src = 'assets/heads.jpeg';
    }

    console.log(face);
    console.log(randomNumber);
    image.classList.remove('hidden');

});