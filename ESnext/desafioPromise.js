const fs = require('fs')
const caminho = __dirname + '/arquivo.txt'

function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho,function(_,conteudo){
            resolve(conteudo.toString())
        })
    })
}

lerArquivo(caminho)
    .then (conteudo=> console.log(conteudo))
