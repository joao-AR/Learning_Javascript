function MeuObjeto() {}

console.log (MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log (obj1.__proto__ === obj2.__proto__)// todos obj criados apartir de uma mesma função contrutora apontam para um mesmo prototipo

console.log (MeuObjeto.prototype === obj2.__proto__)// quando cria obj apartir de uma funçao construtora o __proto__ aponta para "Nome da função".prototype 

MeuObjeto.prototype.nome = 'anonimo'

MeuObjeto.prototype.falar = function(){
    console.log (`Bom dia meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafael'

obj2.falar()

const obj3 = {} // aponta para Object.prototype

obj3.__proto__ = MeuObjeto.prototype // mudadando de prototype 

// informações verdadeiras
console.log ((new MeuObjeto).__proto__ === MeuObjeto.prototype)

console.log ((MeuObjeto.__proto__)=== Function.prototype)

console.log (Function.prototype.__proto__ === Object.prototype)

console.log (Object.prototype.__proto__ === null)