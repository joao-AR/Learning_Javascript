// cadeia de prototipos (prototype chain)

Object.prototype.atributo0 = 'z' 
// !!!! Não é recomendado colocar atributos no Object.prototype !!!!

const avo = {atributo1:'A'}
const pai = {__proto__: avo,atributo2:"B"}
const filho = {__proto__:pai, atributo3: 'C'}

console.log (filho.atributo1)
console.log (filho.atributo0)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais (delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual= this.velMax
        }
    },

    status (){
        return `${this.velAtual }Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //vai usar ela e não a do obj carro 
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` // super para chamar o metodo do protopito
    }
}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)


console.log (ferrari)
console.log (volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)

console.log (ferrari.status())