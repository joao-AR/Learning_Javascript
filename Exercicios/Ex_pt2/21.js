function sorteio (numero){
    let max = 11
    let min= 1
    numero_sorteado = Math.floor (Math.random() * (max - min) + min)

    if (numero == numero_sorteado){
        console.log (`numero sorteado ${numero_sorteado} prabens `)
    }else{
        console.log (`numero sorteado ${numero_sorteado} que pena`)
    }
}

sorteio(1)
sorteio(2)
sorteio(3)
sorteio(4)
sorteio(5)
sorteio(6)
sorteio(7)
sorteio(8)
sorteio(9)
sorteio(10)