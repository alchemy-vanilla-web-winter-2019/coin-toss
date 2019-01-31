const test = QUnit.test;



test('if randomNumber is less than 0.5 return drink', function(assert){
    const result = drinkOrDisney(0.3);
    assert.equal(result, 'drink');
});

test('if randomNumber not less than 0.5 return disney', function(assert){
    const result = drinkOrDisney(0.7);
    assert.equal(result, 'disney');
});

