test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; // this is the math 
     expect(dollars).toBe(expected);
})
test("One yen should be 0.00556 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87; // this is the math
    expect(pounds).toBeCloseTo(expected); 
})
test("one dollar should be 146.261 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5; //this is the math
     expect(yen).toBeCloseTo(expected); 
})