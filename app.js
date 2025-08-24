// Currency conversion rates based on 1 Euro
const oneEuroIs = {
  "JPY": 156.5,
  "USD": 1.07,
  "GBP": 0.87
};

// Convert from Euro to Dollar
function fromEuroToDollar(euro) {
  return parseFloat((euro * oneEuroIs.USD).toFixed(2));
}

// Convert from Dollar to Yen: USD → EUR → JPY
function fromDollarToYen(dollar) {
  const euro = dollar / oneEuroIs.USD;
  const yen = euro * oneEuroIs.JPY;
  return parseFloat(yen.toFixed(2));
}

// Convert from Yen to Pound: JPY → EUR → GBP
function fromYenToPound(yen) {
  const euro = yen / oneEuroIs.JPY;
  const pound = euro * oneEuroIs.GBP;
  return parseFloat(pound.toFixed(2));
}

// Export all functions
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
