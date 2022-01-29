
function VendaDeCarros (tipo_carro){

    switch (tipo_carro){

        case 'hatch': return "Compra efetuada com sucesso"
        break

        case 'sedan': 
        case 'motocicleta':
        case 'caminhonete':
        return "Tem certeza que não prefere este modelo?"
        break
        
        default:
        return "não trabalhamos com este tipo de automóvel aqui"

    }
}

console.log (VendaDeCarros("hatch"))
console.log (VendaDeCarros("sedan"))
console.log (VendaDeCarros("motocicleta"))
console.log (VendaDeCarros("caminhonete"))
console.log (VendaDeCarros("Golf sapão"))