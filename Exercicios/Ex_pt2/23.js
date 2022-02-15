function quantosTem (caractere, string){
    const caracteres = string.split("")
    let quantia = 0

    caracteres.forEach( function (valor,indice){
        if (caracteres[indice]=== caractere){
            quantia += 1
        }
    })

    return console.log (quantia)

    
}

quantosTem("a", "A sorte favorece os audazes")
quantosTem("c", "Conhece-te a ti mesmo")