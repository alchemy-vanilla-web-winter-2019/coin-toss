import coinFlip from './coin-flip.js';

const picNode = document.getElementById('coin-pic');
const flipForm = document.getElementById('flip-form');
const winNode = document.getElementById('win-count');
const lossNode = document.getElementById('loss-count'); 

let winCount = 0;
let lossCount = 0;

flipForm.addEventListener('submit', function(event){
    event.preventDefault();
    const flipGuess = flipForm.elements.flip.value;
    const randomNumber = Math.random();
    const result = coinFlip(randomNumber);
    const guessResults = document.getElementById('guess-results');

    let imageSource = '';

    if(result === 'horse') {
        imageSource = '../assets/coin-horse.jpg';
        
    }
    else {
        imageSource = '../assets/coin-button.jpg';
    }
   
    picNode.classList.remove('hidden');

    picNode.src = imageSource;

    if(result === flipGuess){
        guessResults.textContent = 'You win!';
        winCount++;
        winNode.innerText = winCount;

    }
    else {
        guessResults.textContent = 'You lose!';
        lossCount++;
        lossNode.innerText = lossCount;
    }
    
});