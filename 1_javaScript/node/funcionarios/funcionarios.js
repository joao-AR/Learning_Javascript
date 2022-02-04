const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require ('axios')

const chinesses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'

const menor_salario = (funcionario,funcionario_atual) =>{
    return funcionario.salario < funcionario_atual.salario ? funcionario:funcionario_atual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios.filter(chinesses).filter(mulheres).reduce(menor_salario)
    console.log(func)
})