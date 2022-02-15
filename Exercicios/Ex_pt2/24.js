/*function semelhantes(string,array){
    const resultado = []

    for (let i = 0; i < array.length;i++){
        if (string.includes(inicio))
    }
}*/


function buscarPalavrasSemelhantes(inicio, palavras) {
    const resultado = []
    for (let palavra of palavras)
    if (palavra.includes(inicio))
    resultado.push(palavra)
    return console.log (resultado)
}

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]) // retornará ["javascript", "java"]