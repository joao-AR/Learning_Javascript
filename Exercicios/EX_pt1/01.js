// crie uma função que dado dois valores (passados como paramentro) mostre a soma a subtração, multiplicação e divisão desses valores

// função padrão
function calculadora (n1,n2){

    let soma = n1 + n2
    let sub  = n1 - n2
    let mult = n1 * n2
    let div  = n1 / n2

    return console.log (`Soma: ${soma} sub: ${sub} multi: ${mult} divi: ${div}`)
}

calculadora (2,2)

// arrow

calculadora2 = (n1,n2) => {
    
    let soma = n1 + n2
    let sub  = n1 - n2
    let mult = n1 * n2
    let div  = n1 / n2

    return console.log (`Soma: ${soma} sub: ${sub} multi: ${mult} divi: ${div}`)

}

calculadora2 (3,2)