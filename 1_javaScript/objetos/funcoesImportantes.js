const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

console.log (`keys    -> ${Object.keys(pessoa)}`)
console.log (`values  -> ${Object.values(pessoa)}`)
console.log (`entries -> ${Object.entries(pessoa)}`)

Object.entries (pessoa).forEach (e => {
    console.log (`${e[0]}: ${e[1]}`)
})

console.log ("\n")

Object.entries (pessoa).forEach (([chave,valor]) => { 
    console.log (`${chave}: ${valor}`)
})

console.log ("\n")

Object.defineProperty(pessoa,'dataNascimento',{
    enumerable : true, // pode ser listada ? 
    writable: false,  // pode ser modificada ? 
    value: '01/01/2019'

})

pessoa.dataNascimento = '01,01,2017'

console.log (pessoa.dataNascimento)

console.log (Object.keys(pessoa))

//Objet.assign  (ECMAScript 2015)

const dest = { a:1}
const o1 = {b:2}
const o2 = {c:3,a:4}

const obj = Object.assign (dest,o1,o2) //é usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto destino. Este método irá retornar o objeto destino.

console.log (obj)

Object.freeze (obj)

obj.c = 1234

console.log (obj)

