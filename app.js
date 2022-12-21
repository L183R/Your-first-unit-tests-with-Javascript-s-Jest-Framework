// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar / 1.2 * 127.9;
    // retornamos el valor
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen / 127.9 * 0.8;
    // retornamos el valor
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar,fromDollarToYen , fromYenToPound}