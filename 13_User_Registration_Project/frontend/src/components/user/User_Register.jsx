import React, {Component} from 'react'
import Main from '../templete/Main'
import axios from 'axios'
const header_props = {
    icon:"users",
    title: "Usuários",
    subtitle:"Cadastro de usuários: Incluir,Listar,Alterar e Excluir"   
}

export default class User_Register extends Component{

    render(){
        return(
            <Main {...header_props}>
                Cadastro de Usuario
            </Main>
        )
    }
}