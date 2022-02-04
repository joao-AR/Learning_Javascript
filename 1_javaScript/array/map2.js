const carrinho = [
    '{"nome": "boracha","preco": 3.45}',
    '{"nome": "lapis","preco": 4.50}',
]

const converterJSON = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map(converterJSON).map(apenasPreco)

console.log (resultado)