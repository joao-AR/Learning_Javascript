const aprovados = ['A','B', 'C']

aprovados.forEach(function(nome,indice,array){
    console.log (`${indice+1}: ${nome}`)
    console.log(array)
    
})

aprovados.forEach (nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)

aprovados.forEach(exibirAprovados)