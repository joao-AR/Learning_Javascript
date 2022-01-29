
function aprovado_reprovado (nota){
    let Prox_multiplo5 = nota

    while (Prox_multiplo5 % 5 != 0) {
        Prox_multiplo5++
    }

    if ( Prox_multiplo5 - nota < 3 ){
        nota = Prox_multiplo5

        return console.log (`aprovado: ${nota}`)
    }else if (nota < 38){
        return console.log (`reprovado: ${nota}`)
    }else{
        console.log (`aprovado: ${nota}`)
    }

}

aprovado_reprovado(84)
aprovado_reprovado(83)
aprovado_reprovado(82)
aprovado_reprovado(38)
aprovado_reprovado(36)
aprovado_reprovado(37)
