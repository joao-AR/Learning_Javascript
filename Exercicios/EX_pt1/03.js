//crie uma função  que recebe dois paremetros, base e expoente, retorne a base elevada ao expoente

function Elevado (base,expoente){
    let resultado = base

    while (expoente > 1){
        resultado = resultado * base
        expoente--
    }
    return console.log (`Resultado: ${resultado}`)
}

Elevado (2,3)

// outros metrodos 

function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))