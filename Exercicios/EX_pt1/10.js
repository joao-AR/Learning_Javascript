


function verifica_numero_1 (numero) {
    
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }

}

console.log(verifica_numero_1(3))
console.log(verifica_numero_1(2))
console.log(verifica_numero_1(150))

function verifica_numero_2 (numero) { //

    let resultado = soma_algarismos(numero)
    if(resultado % 3 == 0){
        return true
    }else{
        return false
    }

}

const soma_algarismos = numero => {

    let string_numero = numero.toString()
    let quantidade_algarismos = numero.toString().length
    console.log (`quantidade de algarismos = ${quantidade_algarismos}`)
    
    let soma = 0

    for(let i = 0; i < quantidade_algarismos;i++){
        soma = soma + parseInt(string_numero.charAt(i)) 
    }
    console.log(`soma = ${soma}`) 
    return soma
}

console.log()
console.log(verifica_numero_2(3))
console.log(verifica_numero_2(2))
console.log(verifica_numero_2(150))