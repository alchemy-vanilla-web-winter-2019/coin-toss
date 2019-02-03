import drinkOrDisney from './drink-or-disney.js';

const coinForm = document.getElementById('coin-form');
const image = document.getElementById('coin-image');
const result = document.getElementById('result');
const drinkCount = document.getElementById('drink-count');
const disneyCount = document.getElementById('disney-count');

let drinks=0;
let disney=0;

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
        drinks++;
        drinkCount.textContent = 'Free Drinks: ' + drinks;  
    }
    else {
        image.src = './assets/disney.jpeg';
        result.textContent = 'Yay! Disneyland!';
        disney++;
        disneyCount.textContent = 'Trips to Disney: ' + disney;  
    }

});