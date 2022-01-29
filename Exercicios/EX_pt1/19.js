
function lanchonete (codigo,quantidade){
    
    let valorAserPago
    
    switch (codigo){
        case 100: return valorAserPago = quantidade * 3
        break

        case 200: return valorAserPago = quantidade * 4
        break

        case 300: return valorAserPago = quantidade * 5.5
        break

        case 400: return valorAserPago = quantidade * 7.5
        break

        case 500: return valorAserPago = quantidade * 3.5
        break

        case 600: return valorAserPago = quantidade * 2.5
        break

        default: return "item invalido"
    }
}

console.log (lanchonete (100,2))
console.log (lanchonete (200,2))
console.log (lanchonete (300,2))
console.log (lanchonete (400,2))
console.log (lanchonete (500,2))
console.log (lanchonete (600,2))
console.log (lanchonete (700,2))