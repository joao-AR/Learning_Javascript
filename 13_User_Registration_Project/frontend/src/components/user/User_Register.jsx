import React, {Component} from 'react'
import Main from '../templete/Main'
import axios from 'axios'

const header_props = {
    icon:"users",
    title: "Usuários",
    subtitle:"Cadastro de usuários: Incluir,Listar,Alterar e Excluir"   
}
const base_url = 'http://localhost:3001/users'
const initial_state = {
    user: {name : '', email : '' },
    list: []
}
export default class User_Register extends Component{

    state = { ...initial_state}
    componentWillMount(){ // função chamada quando o componente for mostrado na tela 
        axios(base_url).then(resp => {
            this.setState({list: resp.data})
        })
    }
    clear(){
        this.setState({user: initial_state.user})
    }

    save(){
        const user = this.state.user
        const method = user.id ? 'put': 'post'
        const url = user.id ? `${base_url}/${user.id}`: base_url
        axios[method](url,user)
            .then(resp => {
                const list = this.get_updated_list(resp.data)
                this.setState({user: initial_state.user,list})
            })
    }

    get_updated_list(user,add = true){
        const list = this.state.list.filter( u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    updated_field(event) {
        const user = { ...this.state.user}
        user[event.target.name] = event.target.value 
        this.setState({user})
    }

    render_form()
    {
        return (
            <div className="form">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-grup">
                        <label>Nome</label>
                        <input type="text" className='form-control' 
                        name = "name"
                        value = {this.state.user.name}
                        onChange = {e => this.updated_field(e)}
                        placeholder = "Digite o seu nome..." />
                    </div>
                </div>

                
                <div className="col-12 col-md-6">
                    <div className="form-grup">
                        <label >E-mail</label>
                        < input type = "text" className='form-control'
                        name = "email"
                        value = { this.state.user.email}
                        onChange= {e => this.updated_field(e)}
                        placeholder="Digite o seu E-mail..." />
                    </div>
                </div>
            </div>

            <hr />

            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-primary" onClick={e => this.save(e)}>Salvar</button>
                    <button className="btn btn-secondary ml-2" onClick={ e => this.clear(e)}>Cancelar</button>
                </div>
            </div>
        </div>
        )
    }

    load(user){
        this.setState({user})
    }

    remove(user){
        axios.delete(`${base_url}/${user.id}`)
            .then ( resp => {
                const list = this.get_updated_list(user,false)
                this.setState({list})
            })
    }

    render_table(){
        return ( 
            <table className="table mt-4">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Ações</th>
                    </tr>  
                </thead>

                <tbody>
                    {this.render_rows()}
                </tbody>
            </table>
        )
    }

    render_rows(){
        return this.state.list.map(user => {
            return(
                <tr key = {user.id}> 
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick = { () => this.load(user)}>
                        
                            <i className="fa fa-pencil"></i>
                            </button>

                            <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
                                <i className="fa fa-trash"></i>
                            </button>
                    </td>
                    
                </tr>
            )
        })
    }
    render(){
        return(
            
            <Main {...header_props}>
                cadatro de usuario
                {this.render_form()}
                {this.render_table()}
            </Main>
        )
    }
}