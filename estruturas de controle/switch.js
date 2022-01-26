const imprimirResultado = function (nota){

    switch (Math.floor (nota)){
        case 10:
        case 9:
            console.log('quadro de honra')
        break
        case 8:  case 7: case 6: 
        console.log ('aprovado')
        break
        case 5: case 4:  case 3:
        console.log ("recuperação")
        break
        case 2: case 1:  case 0:
        console.log ("Reprovado")
        break
        default:
            console.log ("nota invalida")
    }
}

imprimirResultado (10)
imprimirResultado (8.9)
imprimirResultado (6.55)
imprimirResultado (2.3)
imprimirResultado (-1)