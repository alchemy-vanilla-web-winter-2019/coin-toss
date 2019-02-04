import coinToss from './coin-toss.js';

const pickForm = document.getElementById('pick-form');

pickForm.addEventListener('submit', function(event){
    event.preventDefault();
    const randomNumber = Math.random();
    const face = coinToss(randomNumber);
    
    
    console.log(face);
    console.log(randomNumber);


});