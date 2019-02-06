import flipIt from './flip-it.js';
const flipForm = document.getElementById('flip-form');
const flipImage = document.getElementById('flip-image');
const flipPredict = document.getElementsByName('predict');

console.log('flippredict', flipPredict);
flipForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // here I need to get the value from the radio buttons
    //check using if/else which is checked, then carry on
    const userPick = flipPredict;

    console.log('userPick', userPick);
    
    
    const randomNumber = Math.random();

    const tossResult = flipIt(randomNumber);
    console.log(tossResult);
    
    
    let imageSource = '';
    if(tossResult === 'heads') {
        imageSource = '../assets/cowhead.jpg';
    } else {
        imageSource = '../assets/cowbutt.gif';
    }

    flipImage.src = imageSource;
    flipImage.classList.remove('hidden');
});

