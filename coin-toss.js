function coinToss(randonNumber) {
    let face = '';
    if(randonNumber > .5){
        face = 'Heads';
    } else {
        face = 'Tails';
    }
    return face;
}



export default coinToss;