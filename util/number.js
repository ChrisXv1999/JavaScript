function isNumber(number, strict = false) {
    return strict ? typeof number === 'number' : !isNaN(number)
}
function isOdd(number,strict=false){
    return isInteger(number,strict) && number % 2 !== 0;
}
function isEven(number,strict=false){
    return isInteger(number,strict) && number % 2 === 0;
}
function isInteger(number, strict = false) {
    return isNumber(number,strict) && number % 1 === 0;
}
function numberInRange(number, min, max) {
    return number > min && number < max;
}
function integerInRange(number,min,max,strict){
    return isInteger(number,strict) && numberInRange(number,min,max);
}
console.log(isEven([]));