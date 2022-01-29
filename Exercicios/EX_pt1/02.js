// crie uma função que recebe 3 lados de triagulos e imprima a classificação quanto ao tamanho de seus lados

function tipoTriangulo (lado1,lado2,lado3){
    
    if (lado1==lado2 && lado1 == lado3){
        return console.log ("equilatero")

    }else if(lado1==lado2 && lado1 != lado3 ||lado1==lado3 && lado1 != lado2 || lado2==lado3 && lado2 != lado1 ){
        return console.log ("isóseles")

    }else if(lado1!=lado2!=lado3){
        return console.log ("escaleno")

    }

}

tipoTriangulo2 = (lado1,lado2,lado3) => {
    
    if (lado1==lado2 && lado1 == lado3){
        return console.log ("equilatero")

    }else if(lado1==lado2 && lado1 != lado3 ||lado1==lado3 && lado1 != lado2 || lado2==lado3 && lado2 != lado1 ){
        return console.log ("isóseles")

    }else if(lado1!=lado2!=lado3){
        return console.log ("escaleno")

    }

}

tipoTriangulo (2,2,2)
tipoTriangulo (1,2,2)
tipoTriangulo (2,1,2)
tipoTriangulo (2,2,1)
tipoTriangulo (1,2,3)


tipoTriangulo2 (2,2,2)
tipoTriangulo2 (1,2,2)
tipoTriangulo2 (2,1,2)
tipoTriangulo2 (2,2,1)
tipoTriangulo2 (1,2,3)
