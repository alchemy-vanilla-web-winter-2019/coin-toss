function flipIt(randomNumber) {
    let toss = '';
    if(randomNumber < 0.5) {
        toss = 'heads';
    } else if(randomNumber > 0.5) {
        toss = 'tails';
    }
    return toss;
}

export default flipIt;