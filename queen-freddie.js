function queenOrFreddie(randomNumber) {
    let catType = '';
    if(randomNumber < .5) {
        catType = 'queen';
    } else catType = 'freddie';
    return catType;
}

export default queenOrFreddie;