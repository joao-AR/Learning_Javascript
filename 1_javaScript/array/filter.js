const produtos = [
    {nome: 'notebook',preco: 4999,fragil: true},
    {nome: 'Ipad prp',preco: 8999,fragil: true},
    {nome: 'copo de vidro',preco: 4.90,fragil: true},
    {nome: 'copo de praxtico',preco: 0.90 ,fragil: false}

]

console.log (produtos.filter(function(p){
    return p.preco >4000
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))