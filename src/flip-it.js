function flipIt(randomNumber) {
    let toss = '';
    if(randomNumber < 0.5) {
        toss = 'heads';
    }
    return toss;
}

export default flipIt;