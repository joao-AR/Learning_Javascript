function receberPrimeiroEUltimoElemento (array){

    let resultado = [array[0], array[array.length -1]]
    
    return console.log (resultado)
}

receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]

function receberPrimeiroEUltimoElemento2 (elementos) {
    const primeiroElemento= elementos.shift()
    const ultimoElemento = elementos.pop()
    return [primeiroElemento, ultimoElemento]
    }


console.log (receberPrimeiroEUltimoElemento2([2,14,"olá2"])) 
console.log (receberPrimeiroEUltimoElemento2([-200, "aplicativo2", 32])) 