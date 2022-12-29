const func = require("./new")

const CustomError = {
    min:"Values must greater then 5",
    max:"Values must be less then 15",
    empty:"Fields shouldn't be empty"
}

console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())

module.exports = CustomError