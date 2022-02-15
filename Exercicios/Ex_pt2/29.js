function melhor_aluno (obj_estudantes){
    const melhor = {}

    obj_estudantes.forEach(function (valor,indice){
        let melhorMedia = 0
        console.log (valor,valor[indice])

    })
}


melhor_aluno ({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
})