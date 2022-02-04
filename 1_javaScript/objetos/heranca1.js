const ferrari = {
    modelo: 'F40',
    velMAX: 324
}

const volvo = {
    modelo: 'V40',
    velMAX: 200
}

console.log (ferrari.__proto__)
console.log (ferrari.__proto__ === Object.prototype)
console.log (volvo.__proto__ === Object.prototype)

console.log (Object.prototype.__proto__ === null)