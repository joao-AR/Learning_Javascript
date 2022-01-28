

const pessoa  = {nome: "joao"}
pessoa.nome = 'pedro' // isso funciona 
// pessoa = {nome: 'ana'} isso não
console.log (pessoa)

Object.freeze (pessoa) // não se pode fazer nehuma ação mais dentro do objeto

pessoa.nome = 'maria'
pessoa.end = 'Rua abc '
delete pessoa.nome

console.log(pessoa.nome)
console.log (pessoa)