//crie uma função que recebe dois valores, o dividendo e o divisor. imprima o resto e o resultado 

function divisao (dividendo,divisor){
    let resultadoDivisao = dividendo / divisor
    let Resto = dividendo % divisor
    return console.log (`divi: ${resultadoDivisao} resto ${Resto}`)

}

divisao (2,3)
divisao (2,2)