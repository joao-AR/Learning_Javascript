function filtra (array, quantia){
    let resultado = []
    //console.log (quantia)
    function maximo (tamanho){
        let max = 1
        for (let i = 0; i < tamanho;i++){
           max = max * 10
        }
        //console.log (`max ${max}`)
        return max
    }
    max_ = maximo(quantia)
    console.log (max_)
    array.forEach(function(valor){
        //console.log (valor)
        if (valor < max_ && valor > max_/10){
            resultado.push(valor)
        }
    })

    return console.log (resultado)
}

filtra([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtra([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]

/*
function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
let resultado = []
v
for(numero of numeros){
const quantidadeDeDigitos = String(numero).length
if(quantidadeDeDigitos === quantidadeDesejada)
resultado.push(numero)
}
return resultado
}
*/