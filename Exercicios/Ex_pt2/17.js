function somaArray (array){
    const soma = array.reduce((acumulador,atual)=> acumulador + atual)
    return console.log (soma)
}

somaArray ([10,10,10])