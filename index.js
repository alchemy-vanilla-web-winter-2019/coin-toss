import coinToss from './coin-toss.js';

const pickForm = document.getElementById('pick-form');
const image = document.getElementById('coin-image');
const remove = document.getElementById('image-section');
const headsCount = document.getElementById('heads-count');
const tailsCount = document.getElementById('tails-count');
const winsCount = document.getElementById('wins');
const lossCount = document.getElementById('loss');

let heads = 0;
let tails = 0;
let wins = 0;
let loss = 0;


pickForm.addEventListener('submit', function(event){
    event.preventDefault();
    const randomNumber = Math.random();
    let face = coinToss(randomNumber);
    if(face === 'Heads') {
        image.src = 'assets/heads.jpeg';
        heads++;
        headsCount.textContent = 'Heads Count: ' + heads;
        winsCount.textContent = 'Wins Count: ' + heads;
    } else {
        image.src = 'assets/tails.jpeg';
        tails++;
        tailsCount.textContent = 'Tails Count: ' + tails;
        lossCount.textContent = 'Loss Count: ' + tails;
    }
    console.log(image);
    console.log(face);
    console.log(randomNumber);
    
    image.classList.remove('hidden');

});