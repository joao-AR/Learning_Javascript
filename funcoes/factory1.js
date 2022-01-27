// factory simples

function criarPessoa(){
    return{
        nome: "ana",
        sobrenome: "silva"
    }

}

console.log (criarPessoa())

function criarProduto(nome,preco){
    return{
    nome,
    preco, 
    desconto: 0.1
    }
}

console.log (criarProduto('notebook',2199.70))
console.log (criarProduto('ipad',1999.40))