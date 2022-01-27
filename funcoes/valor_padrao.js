// estartegia 1 para gerar valor pradão

function soma1 (a,b,c){

    a = a || 1
    b = b || 1
    b = b || 1
    return a + b +c 
}

console.log (soma1(),soma1(3),soma1(1,2,3), soma1 (0,0,0)) // Em 0,0,0 vai assimir o valor padrão pois 0 dá um valor falso

// estrategia 2,3 e 4

function soma2 (a,b,c){

   a = a !== undefined  ? a: 1 // se a for diferente de undefined a recebe a senão recebe 1
   b = 1 in arguments ? b : 1   // dentro de arguments existe o indice 1 ? se existir pegue o valor de b senão pegue o valor de 1
   c = isNaN (c)? 1 : c // se não é um numero retorne 1 senão retorne/ pegue o valor c
   return a + b +c
}
console.log (soma2(),soma2(3),soma2(1,2,3), soma2 (0,0,0))

// valor padrão es2015

function soma3 (a = 1, b = 1, c = 1){
    return a + b + c
}

console.log (soma3(),soma3(3),soma3(1,2,3), soma3(0,0,0))
