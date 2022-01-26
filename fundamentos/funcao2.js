//Armazenando uma função em uma variavel

const imprimiSoma = function (a,b){
    console.log (a+b)
}

imprimirSoma (2,3)

// Armazenando uma funcao arrow em uma variavel

const soma = (a,b)=> {
    return a+b
}
console.log (soma(2,3))

// retorno implicito

const subtarcao = (a,b) => a-b // função de unica linha 

console.log (subtarcao (2,3))