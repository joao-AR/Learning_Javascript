function carro (VelocidadeMAX = 200, delta = 5){

// atributo privado

let VelocidadeAtual = 0

//metodo publico

    this.acelerar = function (){
        if (VelocidadeAtual + delta <= VelocidadeMAX){
            VelocidadeAtual  += delta
        }else{
            VelocidadeAtual = VelocidadeMAX
        }
    }
// metodo piblico 

this.getVelocidadeAtual = function(){
    return VelocidadeAtual
}
}

const uno = new carro
uno.acelerar ()
console.log (uno.getVelocidadeAtual())

const ferrari = new carro (350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log (ferrari.getVelocidadeAtual())