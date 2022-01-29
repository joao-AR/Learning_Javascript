
function barradaDeFruta (fruta){

    switch(fruta){
        case 'maça': return "Não vendemos essa fruta aqui"
        break

        case 'Kiwi': return "Estamos com escassez de kiwis"
        break

        case 'melancia': return 'Aqui está, são 3 reais o quilo'
        break
        default: return "Erro"
    }
}

console.log (barradaDeFruta("maça"))
console.log (barradaDeFruta('Kiwi'))
console.log (barradaDeFruta("melancia"))
console.log (barradaDeFruta(" "))