import coinToss from './coin-toss.js';

const pickForm = document.getElementById('pick-form');
const image = document.getElementById('coin-image');
const headsCount = document.getElementById('heads-count');
const tailsCount = document.getElementById('tails-count');
const winsCount = document.getElementById('wins');
const lossesCount = document.getElementById('losses');

let heads = 0;
let tails = 0;
let win = 0;
let loss = 0;

pickForm.addEventListener('submit', function(event){
    event.preventDefault();

    image.classList.remove('hidden');
    // const randomNumber = Math.random();
    let face = coinToss(Math.random());
    if(face === 'Heads') {
        image.src = 'assets/heads.jpeg';
        heads++;
        headsCount.textContent = 'Heads Count: ' + heads;
    } else {
        image.src = 'assets/tails.jpeg';
        tails++;
        tailsCount.textContent = 'Tails Count: ' + tails;
    }
    let radio = pickForm.elements.radio.value;
    if(face === radio) {
        win++;
        document.getElementById('wins').textContent = 'Wins Count: ' + win;
    } else {
        loss++;
        lossesCount.textContent = 'Loss Count: ' + loss;
    }
    
    let trackingWL = {
        wins: winsCount.value = win,
        losses: lossesCount.value = loss,
    }; console.log('working?', trackingWL);

    localStorage.setItem('Store It', JSON.stringify(trackIt));

    // console.log(image);
    // console.log(face);
    // console.log(randomNumber);
});

