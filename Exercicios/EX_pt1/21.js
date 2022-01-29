
function convenio (idade){

    let Valor_convenio = 100
    if (idade >0 && idade <=10){
        return Valor_convenio = Valor_convenio + 80

    }else if (idade>10 && idade <= 30){
        return Valor_convenio = Valor_convenio + 50

    }else if (idade > 30 && idade <= 60){
        return Valor_convenio = Valor_convenio + 95

    }else if (idade > 60){
        return Valor_convenio = Valor_convenio + 130

    } else{
        return "idade invalida"
    }
}

console.log (convenio (-1))
console.log (convenio (5)) 
console.log (convenio (15))
console.log (convenio (35))
console.log (convenio (65))
