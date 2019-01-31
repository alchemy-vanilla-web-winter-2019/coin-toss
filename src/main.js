import catOrDog from './cat-or-dog.js';

const flipForm = document.getElementById('flip-form');
const image = document.getElementById('animal-image');

flipForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();
    let animal = catOrDog(randomNumber);

    let imageSource = '';

    if(animal === 'cat') {
        imageSource = '../assets/cat.jpg';
    } else {
        imageSource = '../assets/dog.jpg';
    }

    image.src = imageSource;
    image.classList.remove('hidden');
});

// write script to declare winner or loser based off of radio button selection

// write script to count wins and losses