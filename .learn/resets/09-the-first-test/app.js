//SUMA
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

let fromEuroToDollar = function(euro) {
    return euro * oneEuroIs["USD"];
}

let fromDollarToYen = function(dollar){
    return dollar * oneEuroIs["JPY"]
}

let fromYenToPound = function(yen){
    return yen * oneEuroIs["GBP"]
}


// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum };