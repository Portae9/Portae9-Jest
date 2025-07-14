const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app');

test('adds 14 + 9 to equal 23', () => {
    expect(sum(14, 9)).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.5 * 1.07);
});

test("One dollar should be 156.5 yen", function() {
    expect(fromDollarToYen(3.5)).toBeCloseTo(3.5 * 156.5);
});

test("Should convert Yen to Pound correctly", function() {
    expect(fromYenToPound(3.5)).toBeCloseTo(3.5 * 0.87 / 156.5);
});
