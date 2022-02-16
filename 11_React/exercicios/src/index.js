import React from 'react'
import ReactDom from 'react-dom'
//import Primeiro from './componentes/Primeiro'
//import Bomdia from './componentes/Bomdia'
//import{BoaTarde,BoaNoite} from './componentes/multiplos'
//eactDom.render(<h1>React</h1>,document.getElementById('root'))
//import Saudacao from './componentes/Saudacao'
import Pai from './componentes/pai'


//ReactDom.render(<Primeiro />,document.getElementById('root'))

//ReactDom.render(<Bomdia nome ="joao" />,document.getElementById('root'))

ReactDom.render(
<div>
    <Pai nome="Paulo " sobrenome="silva"/>
</div>
,document.getElementById('root'))