
function salario_novo (plano, salario){
    let salarioComAumento 
    switch (plano){
        case 'A': return salarioComAumento = salario + (salario*0.10)
        break
        case 'B': return salarioComAumento = salario + (salario*0.15)
        break
        case 'C': return salarioComAumento = salario + (salario*0.20)
        break
        default: return "plano invaldo"
    }


}

console.log (salario_novo('A',1000))
console.log (salario_novo('B',1000))
console.log (salario_novo('C',1000))
console.log (salario_novo('D',1000))