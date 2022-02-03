// tratamento de erros com  reject, .catch

function funciona_ou_nao (valor,chance_erro){

    return new Promise((resolve,reject) => {
        
        if(Math.random() < chance_erro){
            reject('ocorreu um erro!')
        }else{
            resolve(valor)
        }

    })
}

funciona_ou_nao('testando...',0.1)
    .then(v => console.log(`Valor: ${v}`))
    .catch (erro => console.log(`ERRO: ${erro}`))