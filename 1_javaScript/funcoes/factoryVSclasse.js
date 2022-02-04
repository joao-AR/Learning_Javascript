/*class pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar (){
        console.log (`Meu nome é ${this.nome}`)
    }
}*/

function pessoa (nome){
    this.nome = nome

    this.falar = function (){
    
    console.log (`meu nome é ${nome}`)}
    
}
const p1 = new pessoa ('carlos')
p1.falar()

/*function pessoa(nome){
    return {
        falar : () => {
        return console.log(`meu nome é ${nome}`)}
        
    }
    

}

const p1 = pessoa ('renan')
p1.falar()*/


const criaPessoa = nome => {
    return{
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criaPessoa('pedro')
p2.falar()