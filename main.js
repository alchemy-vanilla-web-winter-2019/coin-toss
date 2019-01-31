const animeLove = document.getElementById('animeLove');
animeLove.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(animeLove);
    let src = '';
    
    
    const randomNumber = Math.random();
    if(randomNumber <= .5){
        src = 'https://pics.me.me/naruto-hinata-son-7809508.png';
    }
    else {
        src = 'https://static.zerochan.net/SasuSaku.full.2346132.jpg';
    }
    
    const image = document.getElementById('team-image');
    image.src = src;
});