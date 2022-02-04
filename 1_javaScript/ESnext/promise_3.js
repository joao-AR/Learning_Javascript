function gerar_numeros_entre(min,max,tempo){

    if (min > max) [max,min] = [min,max]

    return new Promise (resolve => {

        setTimeout(function () {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random()*fator)+ min
            resolve(aleatorio)
        },tempo)
    })

}


function gerar_varios_numeros(){

    return Promise.all( // .all quando todos os valores forem resolvidos vai ser chamado o .then  
        [
            gerar_numeros_entre(1,60,4000),
            gerar_numeros_entre(1,60,1000),
            gerar_numeros_entre(1,60,500),
            gerar_numeros_entre(1,60,8000),
            gerar_numeros_entre(1,60,100)
        ]
    )
}

console.time('promise')

gerar_varios_numeros()
    .then(numeros => console.log(numeros))
    .then (() => console.timeEnd('promise'))