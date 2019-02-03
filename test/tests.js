import headsTails from '../src/heads-tails.js';

const test = QUnit.test;    

test('returns heads when randomNumber is < than 0.5', function(assert) {
    const randomNumber = 0.4;
    const expected = 'Heads';
    const result = headsTails(randomNumber);
    assert.equal(result, expected);
});

test('returns tails when randomNumber is > or = than 0.5', function(assert) {
    const randomNumber = 0.8;
    const expected = 'Tails';
    const result = headsTails(randomNumber);
    assert.equal(result, expected);
});
