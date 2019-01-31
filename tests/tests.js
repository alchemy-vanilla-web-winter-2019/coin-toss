const test = QUnit.test;
import coinToss from '../coin-toss.js';

test('returns heads when >= .5', function(assert) {
    const inputNumber = .7;
    const expected = 'Heads';
    const result = coinToss(inputNumber);
    assert.equal(result, expected);
});

test('returns Tails when inputNumber < .5', function(assert){
    const inputNumber = .4;
    const expected = 'Tails';
    const result = coinToss(inputNumber);
    assert.equal(result, expected);
});