
const pilotos = ['piloto1','piloto2', 'piloto3','piloto4']

pilotos.pop()// tirar o ultimo elemento do array 
console.log(pilotos)

pilotos.push('piloto5')//adiciona na ultima posição do array 
console.log (pilotos)

pilotos.shift()//remove o primeiro elemento
console.log (pilotos)

pilotos.unshift('piloto6') // adiciona na primeira posição 
console.log (pilotos)

//splice pode adicionar e remover elementos 

//adicionar 

pilotos.splice(2,0,'piloto7','piloto8') 
// (indice, quantiade que vai remover, add elementos )
console.log(pilotos)

// remover

pilotos.slice(3,1)// (posição,quantidade de elementos a serem deletados)
console.log(pilotos)

const algunspilotos1 = pilotos.slice(2)// .slice cria novo array 
console.log(algunspilotos1)

const  algunspilotos2 = pilotos.slice(1,4) // inclui o idice 1 mas não o 4
console.log (algunspilotos2)