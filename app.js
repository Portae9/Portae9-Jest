const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));

module.exports = { sum };

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }

// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yen
    let valueInYen = valueInDollar * 146.26;
    // Retornamos el valor en yen
    return valueInYen;
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen }

// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a Pound
    let valueInPound = valueInYen * 0.06;
    // Retornamos el valor en yen
    return valueInYen;
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }