const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("1 euro should be 1.07 dollars", () => {
  expect(fromEuroToDollar(1)).toBe(1.07);
});

test("1 dollar should be approximately 146.26 yen", () => {
  // 1 USD → (1 / 1.07) EUR → * 156.5 JPY = ~146.26
  expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2);
});

test("200 yen should be approximately 1.11 pounds", () => {
  // 200 JPY → (200 / 156.5) EUR → * 0.87 GBP = ~1.1129
  expect(fromYenToPound(200)).toBeCloseTo(1.11, 2);
});
