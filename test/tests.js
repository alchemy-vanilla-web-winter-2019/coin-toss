const test = QUnit.test;

function headsOrTails(randomNumber) {
    if(randomNumber < 0.5) {
        return 'heads';
    }
    else {
        return 'tails';
    }
}




test('if number is less than 0.5, return heads', function(assert) {
    const results = headsOrTails(0.3);
    assert.equal(results, 'heads');

});

test('if number is greater than or equal to 0.5, return tails', function(assert) {
    const results = headsOrTails(0.6);
    assert.equal(results, 'tails');

});