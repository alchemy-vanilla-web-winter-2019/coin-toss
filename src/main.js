import coinFlip from './coin-flip.js';

const picNode = document.getElementById('coin-pic');
const flipForm = document.getElementById('flip-form');

// let winCount = '';
// let lossCount = '';

flipForm.addEventListener('submit', function(event){
    event.preventDefault();
    const flipGuess = flipForm.elements.flip.value;
    const randomNumber = Math.random();
    const result = coinFlip(randomNumber);
    const guessResults = document.getElementById('guess-results');

    let imageSource = '';

    if(result === 'heads') {
        imageSource = '../assets/coin-horse.jpg';
        
    }
    else {
        imageSource = '../assets/coin-button.jpg';

    }
    picNode.src = imageSource;
    console.log(flipGuess);
    if(result === flipGuess){
        guessResults.textContent = 'You win!';
        console.log('that is right');
    }
    else {
        guessResults.textContent = 'You lose!';
        console.log('that is wrong');

    }
    

});