import drinkOrDisney from './drink-or-disney.js';

const coinForm = document.getElementById('coin-form');
const image = document.getElementById('coin-image');
const result = document.getElementById('result');



coinForm.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('button clicked'); 

    const randomNumber = Math.random();
    console.log(randomNumber);

    const side = drinkOrDisney(randomNumber);
    console.log(side);

    
    if(side === 'drink'){
        image.src = './assets/drink.jpeg';
        result.textContent = 'Yay! Free Drink!';
    }
    else {
        image.src = './assets/disney.jpeg';
        result.textContent = 'Yay! Disneyland!';
    }

});