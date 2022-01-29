function fatorial (numero){
    var resultado = numero 

    for (let i = 1; i < numero;i++){
        resultado = resultado * i
    }
    return resultado
}

console.log (fatorial(5))