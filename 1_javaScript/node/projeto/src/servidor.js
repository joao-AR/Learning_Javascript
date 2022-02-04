const porta = 3003

const express = require ('express')
const app = express()
const bodyParser = require ('body-parser')
const bancoDeDados = require ('./bancoDeDados')
app.use(bodyParser.urlencoded({extended: true}))

app.get ('/produtos',(req,resp,next)=>{
    resp.send(bancoDeDados.getProdutos())
    // resp.send({nome: 'notebook',preco: 300})// vai coverter para JSON
})
app.get('/produtos/:id',(req,resp,next)=>{
    resp.send (bancoDeDados.getProduto(req.params.id))
})

app.post ('/produtos',(req,resp,next)=> {
    const produto = bancoDeDados.salvaPrdotuto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    resp.send(produto)//JSON
})

app.listen(porta,() => {
    console.log (`servidor executando na porta  ${porta}`)
})