import coinFlip from './coin-flip.js';

const picNode = document.getElementById('coin-pic');
const flipForm = document.getElementById('flip-form');


flipForm.addEventListener('submit', function(event){
    event.preventDefault();

    const randomNumber = Math.random();
    const result = coinFlip(randomNumber);
    let imageSource = '';

    if(result === 'heads') {
        imageSource = '../assets/coin-horse.jpg';
    }
    else {
        imageSource = '../assets/coin-button.jpg';

    }
    picNode.src = imageSource;
    console.log(result);
    

});