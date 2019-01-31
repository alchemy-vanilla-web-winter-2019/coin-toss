const test = QUnit.test;

function headsOrTails(randomNumber) {
    if(randomNumber < 0.5) {
        return 'heads';
    }
}




test('if number is less than 0.5, return heads', function(assert) {
    const results = headsOrTails(0.3);
    assert.equal(results, 'heads');

});