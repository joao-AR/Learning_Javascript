let string = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function avalia (string){

    let pontuacoes = string.split (", ")
    let qtdrecord = 0
    let pior_jogo=1
    let menorPontuacao = pontuacoes[0]
    let maiorPontuacao = pontuacoes [0]
    
    for (let i = 1 ;i < pontuacoes.length ;i++){
        if (pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            qtdrecord++
        }else if (pontuacoes[i] < menorPontuacao ){
            menorPontuacao = pontuacoes[i]
            pior_jogo = i+1
        }
    }
    return [qtdrecord,pior_jogo]
}

console.log(avalia(string))