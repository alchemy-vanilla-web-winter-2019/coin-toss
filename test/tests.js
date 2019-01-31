import headsTails from '../src/heads-tails.js'
const test = QUnit.test;

test('if randomNumber is less than 0.5 return Tails', function(assert) {
    const randomNumber = 0.42;
    const expected = 'Tails';
    const result = headsTails(randomNumber);
    assert.equal(result, expected);
});

test('if randomNumber is greater than or equal to 0.5 return Heads', function(assert) {
    const randomNumber = 0.7;
    const expected = 'Heads';
    const result = headsTails(randomNumber);
    assert.equal(result, expected);
});