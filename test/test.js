
const test = QUnit.test;
import warfTasha from '../src/warfOrTasha.js';


test('if random number less than .5 warf wins, else tasha wins', function(assert){
    const functionOutput = warfTasha(.2);
    assert.equal(functionOutput, 'warf');
});

test('if random number more than .5 tasha wins, else warf wins', function(assert){
    const functionOutput = warfTasha(.7);
    assert.equal(functionOutput, 'tasha');
});