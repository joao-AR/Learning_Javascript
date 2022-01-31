const contadorA = require('./instaciaUnica')
const contadorB = require('./instaciaUnica')

const contadorC = require('./insaciaNova')()
const contadorD = require('./insaciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor,contadorB.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorC.valor,contadorD.valor)
