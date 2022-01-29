
function caixa (dinheiro){
    let nota100 =0
    let nota50  =0
    let nota10  =0
    let nota5   =0
    let nota1   =0
    
    while (dinheiro > 0 ) {
        if (dinheiro > 100){
            dinheiro = dinheiro - 100
            nota100++
        }else if (dinheiro >= 50 && dinheiro < 100){
            dinheiro= dinheiro - 50
            nota50++
        }else if (dinheiro >= 10 && dinheiro < 50){
            dinheiro = dinheiro -10
            nota10++
        }else if(dinheiro >=5 && dinheiro <10){
            dinheiro = dinheiro -5
            nota5++
        }else if (dinheiro >=1 && dinheiro < 5){
            dinheiro = dinheiro -1
            nota1++
        }
    }

    if (nota100 > 0){
        console.log (`notas de 100: ${nota100}`)
    }
    if (nota50 > 0){
        console.log (`notas de 50: ${nota50}`)
    }

    if (nota10 > 0){
        console.log (`notas de 10: ${nota10}`)
    }

    if (nota5 > 0){
        console.log (`notas de 5: ${nota5}`)
    }

    if (nota1 > 0){
        console.log (`notas de 1 : ${nota1}`)
    }
    
}
caixa (18)