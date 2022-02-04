const fs = require ('fs')

const produto = {
    nome: 'celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGErado.json',JSON.stringify(produto),erro => {
    console.log(erro || 'arquivo salvo')
})