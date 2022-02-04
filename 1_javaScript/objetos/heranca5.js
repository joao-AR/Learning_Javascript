
String.prototype.reverse = function (){ // adicionando funcionalidades que não tinha antes

    return this.split('').reverse().join('') // para acessar um array o uma string dentro do metodo prototipo usa this.
}

console.log ('joao pedro'.reverse())

Array.prototype.first = function (){
    return this [0]
}


console.log ([2,4,6,8].first())