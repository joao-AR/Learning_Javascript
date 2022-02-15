function Salario (horas,valor_horas){
    let salario_bruto = horas * valor_horas
    let salario_liquedo = salario_bruto - (salario_bruto*0.30)

    return console.log (`Salario igual a R$ ${salario_liquedo}`)
}


Salario (180,60)