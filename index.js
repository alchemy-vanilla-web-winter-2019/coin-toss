const clickForm = document.getElementById('click-form');
let image = document.getElementById('image');

clickForm.addEventListener('submit', function(event){
    event.preventDefault();

    const randomNumber = Math.random();
    if(randomNumber <= .5) { 
        console.log('heads');
        image.alt = 'Coin Heads';
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDYp0AgbEB9ykR4QNSV5BFs0CLLDJKpj6NR6CJxzWhsJ8u0T1B";
    } else {
        image.alt = 'Coin Tails';
        image.src = "https://qph.fs.quoracdn.net/main-qimg-148ae81e6fe0500e130fb547026a9b26";
    }
});