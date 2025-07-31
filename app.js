// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
        let valueInYen = valueInDollar * 156.4;
        return valueInYen;
}


// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInYen) {
        let valueInPound = valueInYen * 0.87;
        return valueInPound;
}


// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a+b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3));


// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }