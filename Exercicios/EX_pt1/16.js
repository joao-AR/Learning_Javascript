
function calculadora (n1,n2,tipo){

    switch (tipo){
        case'+': return n1 + n2
        break
        case'-': return n1 - n2
        break
        case'*': return n1 * n2
        break
        case'/': return n1 / n2
        break
        default: return "operação invalida"
    }
}


console.log (calculadora(2,2,'+'))
console.log (calculadora(2,2,'-'))
console.log (calculadora(2,2,'/'))
console.log (calculadora(2,2,'*'))