function tratarErro (erro){
    throw new Error ("...")
}

function imprirNomeGritado (obj){
    try{
    console.log (obj.name.toUpperCase () + '!!!')
    } catch (e) {
        tratarErro (e)
    }
}

const obj = { nome: 'roberto'}

imprirNomeGritado (obj)