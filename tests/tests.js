const test = QUnit.test;
import flipIt from '../src/flip-it.js';


test('heads is returned if number is less than 0.5', function(assert) {
    const testNumber = .4;
    const expected = 'heads';
    const result = flipIt(testNumber);
    assert.equal(result, expected);
});

test('tails is returned if number is over .5', function(assert) {
    const testNumber = .6;
    const expected = 'tails';
    const result = flipIt(testNumber);
    assert.equal(result, expected);
});