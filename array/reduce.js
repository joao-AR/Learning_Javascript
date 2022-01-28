const alunos = [
{nome: 'joao',nota: 7.3},
{nome: 'maria', nota: 9.2},
{nome:'pedro',nota:9.8},
{nome:'ana', nota: 8.7}
]

const resultado = alunos.map (a => a.nota).reduce(function(acumulador,atual){
    console.log (acumulador,atual)
    return acumulador + atual
},0/* numero vai ser o valor inicial*/)

console.log (resultado)