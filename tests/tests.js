const test = QUnit.test;


test('returns heads when >= .5', function(assert) {
    const randomNumber = .6;
    const expected = 'Heads';
    const result = randomNumber;
    assert.equal(result, expected);
});