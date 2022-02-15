// ultilização de obj e array


function objetoParaArray(objeto) {
    const chaves = Object.keys(objeto)
    
    const resultado = chaves.map(function(chave,indice,obj){
        console.log (`chave: ${chave}, obj[chave]:${objeto[chave]},  indice: ${indice},  obj: ${obj}`)
        let result = [chave, objeto[chave]]
        return result
    
    })
    
    return console.log (resultado)
    }


objetoParaArray({ 
nome: "Maria", 
profissao: "Desenvolvedora de software" 
})