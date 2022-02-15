
function removerPropriedade (objeto,propriedade){

    const copia = Object.assign({},objeto)
    delete copia[propriedade]
    return console.log (copia)
}



removerPropriedade({a: 1, b: 2}, "a") 
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") 
