const test = QUnit.test;
import leftOrRight from '../src/left-or-right.js';

test('Return left if input < .5', function(assert) {
    let result = leftOrRight(.4);
    let expected = 'left';
    assert.equal(result, expected);
});

test('Return right if input >= .5', function(assert) {
    let result = leftOrRight(.6);
    let expected = 'right';
    assert.equal(result, expected);
});