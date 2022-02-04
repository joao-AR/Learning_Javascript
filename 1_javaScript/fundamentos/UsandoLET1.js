var numero = 1 
{
    let nuero = 2
    console.log ('dentro= ', numero)

}

console.log ('fora = ', numero)


let numero2 = 3
{
    let nuero2 = 4 // <- se os dois forem let evai dar prioridade para o escopo menor 
    console.log ('dentro= ', numero2)

}

console.log ('fora = ', numero2)