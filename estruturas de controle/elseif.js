Number.prototype.entre = function (inicio,fim){
    return this >= inicio && this <= fim
}


const imprimirResultado = function (nota){

    if (nota.entre (6,10)){
        console.log ("Aprovado")
    }else if (0,5.9){
        console.log ('reprovado!')
    }

}