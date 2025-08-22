// Esta es la funcion que suman dos numeros
const sum= (a,b) => {
    return a+b
}
console.log(sum(7,3))


// 1 EUR (Euro) = 1.07 USD (US Dollar)
const oneEurois = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}
const fromDollarToYen = (dollars) => {
    let euros = dollars / oneEurois.USD;
    let yenes = euros * oneEurois.JPY;
    return yenes;
}

const fromEuroToDollar = (euros) => {
    return euros * oneEurois.USD;
}

const fromYenToPound = (yenes) => {
    let euros= yenes / oneEurois.JPY;
    let pounds= euros * oneEurois.GBP;
    return pounds;
}

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};
