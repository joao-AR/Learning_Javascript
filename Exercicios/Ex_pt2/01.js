
function concatena (string){
    return console.log (`Olá, ${string} !`)
}

function concatena2 (string){
    const saudacao = "Olá"
    return [saudacao,string].join(', ').concat("!")
}

concatena('maria')
console.log (concatena2 ('Leonardo'))