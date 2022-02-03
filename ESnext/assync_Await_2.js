// fazer com que um codigo assimcrono parecer sincrono 

function esperar_por (tempo = 2000){

    return new Promise (function (resolve){
        setTimeout(() => resolve(),tempo)
    })
}

async function executar(){

    await esperar_por(1500)
    console.log('Async/Await 1...')

    await esperar_por(1500)
    console.log('Async/Await 2...')

    await esperar_por(1500)
    console.log('Async/Await 3...')
}

executar()