const moduloA = require ('../../moduloA')
console.log (moduloA.ola)

const c = require('./pastaC')// vai procura pelo arquivo index.js
console.log(c.ola2)

const http = require('http')
http.createServer((requisicao,resposta)=>{
    resposta.write('bom dia')
    resposta.end()
}).listen(8080)