const notas = [6.7,7.4,9.8,10]

for (let i in notas){

    console.log (i, notas [i])
}

const pessoa = {
    nome: 'ana',
    sobrenome: "silva",
    idade: 29,
    peso : 64
}

for (let atributo in pessoa){

    console.log (`${atributo} = ${pessoa[atributo]}`)
}