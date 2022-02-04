
console.log (soma (3,4)) // nesse caso a função vai funionar mesmo  a chamada estando antes da declaração,pois o compilardor pega todas as "function desclaration" antes de iniciar o programa
// já as outras mão funcionam dessa forma 


// function desclaration

function soma (x,y){
    return x+y
}

// function expression
const sub = function (x,y){
    return x -y
}

// named function expression

const mult = function mult (x,y){

    return x*y
}