import coinToss from './coin-toss.js';

const pickForm = document.getElementById('pick-form');

pickForm.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('form submitted');

    const randomNumber = Math.random();
    console.log(randomNumber);

    const face = coinToss(randomNumber);
    console.log(face);



});