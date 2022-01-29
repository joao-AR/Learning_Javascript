// elabore duas funções que recebem capital inicial, taxa de juros e tempo de aplicação, uma retorna o montante por juros  simples e outra por juros compostos

function jurosSimples (capital,taxa_juros,tempo_mes){
    let montante = capital + (capital * (taxa_juros*tempo_mes))
    return montante
}

function jurosCompostos (capital,taxa_juros,tempo_mes){
    let montante = capital
    while (tempo_mes >= 1){
        montante = montante + (montante * taxa_juros)
        tempo_mes--
    }
    return montante
}


console.log (jurosSimples(100,0.10,3))

console.log (jurosCompostos(100,0.10,3))