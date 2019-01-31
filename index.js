const clickForm = document.getElementById('click-form');
let image = document.getElementById('image');

clickForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();
    console.log(randomNumber);
    if(randomNumber <= .5) {
        console.log('Heads');
        image.alt = 'heads!';
        image.src = 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/27747531_1751480234914508_2480748971091986686_o.jpg?_nc_cat=110&_nc_ht=scontent-sea1-1.xx&oh=6ac9f0311b7cd652eb6a82c7e38e1676&oe=5CBC5E72';
    } else {
        console.log('Tails');
        console.log(randomNumber);
        image.alt = 'tails!';
        image.src = 'https://shedsimove.com/sites/default/files/images/shed%20simove%20coin%20clean%20back.jpg';
    }
});


