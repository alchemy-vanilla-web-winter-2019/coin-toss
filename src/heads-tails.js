function headsTails(randomNumber) {
    let face = '';

    if(randomNumber < 0.5) {
        face = 'Tails';
    } else {
        face = 'Heads';
    }
    return face;
}
export default headsTails;