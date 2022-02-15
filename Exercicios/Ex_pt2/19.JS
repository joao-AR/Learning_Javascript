function mediaSimples (array){
    let soma =0
    for(let i = 0; i < array.length; i++){
        soma = soma + array[i]
    }

    return console.log ( soma/ array.length)
}

mediaSimples ([0,10])
mediaSimples ([1,2,3,4,5])