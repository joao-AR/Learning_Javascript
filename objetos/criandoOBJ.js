// usando a forma literal 

const obj1 = { }

console.log (obj1)

//object em JS

const obj2 = new Object
console.log (obj2)

//funções construtoras 

function produto (nome,preco,desc){
    this.nome = nome // publico 
    this.getPrecoComDesconto = () =>{ // privado, não da para acessar e mudar o valor de preço e desconto depois de criado o objeto
        return preco * (1-desc)
    }
}

const p1 = new produto ('Caneta',7.99,0.15)
const p2 = new produto ('Notebook',2998.99,0.25)

console.log (p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//fução factory 

function CriarFuncionario (nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario (){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = CriarFuncionario ('joao',7980,4)

const f2 = CriarFuncionario ('maria',11400,1)

console.log (f1.getSalario(),f2.getSalario())

//Object.create 

const filha = Object.create (null)

filha.nome = 'ana'

console.log (filha)