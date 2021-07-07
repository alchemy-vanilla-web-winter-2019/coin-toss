import coinFlip from './coinFlip.js';
const flipTheCoin = document.getElementById('flip-the-coin');
const coinPic = document.getElementById('coin-pic')
const countHeads = document.getElementById('count-heads');
const countTails = document.getElementById('count-tails');
let headCounter = 0;
let tailCounter = 0;

flipTheCoin.addEventListener('submit', function(event){
    event.preventDefault();
    const randomNumber = Math.random();
    let imageSource = '';
    const headsOrTails = coinFlip(randomNumber);
    if(headsOrTails === 'heads') {
        imageSource = '../assets/coin-button.jpg';
        headCounter++;
        countHeads.textContent = headCounter;
    }
    else {
        imageSource = '../assets/coin-horse.jpg';
        tailCounter++;
        countTails.textContent = tailCounter;
    }
    coinPic.src = imageSource;
    console.log(countTails);
    
});

