function despesas (array_produtos){
    console.log (array_produtos.map(item => item.preco))
    /*let sonumero = []
        array_produtos.forEach( obj => {
            sonumero.push(obj.preco)
        })

        let soma = sonumero.reduce((acumulador,atual)=> acumulador + atual)
        return console.log(soma)*/
    }
    
    
    




despesas([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ])

despesas([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]) 