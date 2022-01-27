// closure é o escopo criado quando a função é declarada 
// esse escopo permite a função acessar e manipular variáveis externas á funçao 

// contexto lexico em ação 

const x = 'GLobal'

function fora (){


    const x = 'local' 
    function dentro(){

        return x
    }
    return dentro
}

const minhaFuncao = fora ()

console.log (minhaFuncao())