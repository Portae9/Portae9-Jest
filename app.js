let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound    
    }; 


const fromEuroToDollar = (euro) => euro * oneEuroIs.USD;

const fromDollarToYen = (dollars) => (dollars / oneEuroIs.USD) * oneEuroIs.JPY;

const fromYenToPound = (yenes) => (yenes / oneEuroIs.JPY) * oneEuroIs.GBP;


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };