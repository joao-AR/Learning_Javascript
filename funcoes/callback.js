const fabricantes = ["mercedes","Audi","BMW"]

function impimir (nome,indice ){

    console.log (`${indice + 1 }. ${nome}`)
}

fabricantes.forEach (impimir)

fabricantes.forEach (function (fabricante){ // ou // fabricantes.forEach (fabricante => console.log (fabricante))
    console.log (fabricante)
})