
function valor_anuidade (mes,valor){

    if (mes >= 1 && mes <=12){

        for (let i = 1; i < mes; i++){
            valor = (valor + (valor *0.05))
        }
        return valor.toFixed(2)
    } else {
        return "mes invalido"
    }
    

}

console.log (valor_anuidade(1,100))
console.log (valor_anuidade(2,100))
console.log (valor_anuidade(3,100))
console.log (valor_anuidade(4,100))
console.log (valor_anuidade(5,100))
console.log (valor_anuidade(6,100))
console.log (valor_anuidade(7,100))
console.log (valor_anuidade(8,100))
console.log (valor_anuidade(9,100))
console.log (valor_anuidade(10,100))
console.log (valor_anuidade(11,100))
console.log (valor_anuidade(12,100))
console.log (valor_anuidade(13,100))
