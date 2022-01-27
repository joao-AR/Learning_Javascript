const valor = 'Global'

function minhaFuncao (){
    console.log (valor)
}

function exec (){

    const valor = 'local'
    minhaFuncao () 
/*  vai achar o valor Global, primeiramente ela vai procurar dentro do contexto 
    em que ela foi definida se não achar ela vai prourar me um contexto mais abragente,
    por isso que se colocar " const valor = 'local' " dentro de  
    "function minhaFuncao ()" o console.log vai escrever local 
    e caso não colocar vai escrever 'global'
*/
}

exec();