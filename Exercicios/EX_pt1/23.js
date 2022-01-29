
function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)

    notas.sort((a,b) => a < b ? 1 : -1) // ordenação usando arrow function
    
   /*function ordenaNota (a,b){ // ordenação sem usar arrow function
        return a < b ? 1 : -1
    }
    notas.sort(ordenaNota)*/

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${notas[0]}, ${notas[1]}, ${notas[2]}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)