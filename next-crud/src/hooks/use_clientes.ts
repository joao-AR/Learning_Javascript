import { useEffect,useState } from "react"
import Cliente from "../core/Cliente"
import Colecao_cliente from "../Backend/db/colecao_cliente"
import Cliente_repositorio from "../core/Cliente_repositorio"
import use_tabela_ou_form from "./use_tabela_ou_form"
export default function use_clientes(){
    
    const {tabela_visivel,formulario_visivel,exibir_formulario,exibir_tabela} = use_tabela_ou_form()
    const repo: Cliente_repositorio = new Colecao_cliente

    const [visivel,set_visivel] = useState<'tabela' | 'form'>('tabela')
    const [cliente,set_cliente] = useState<Cliente>(Cliente.vazio())
    const [clientes,set_clientes] = useState<Cliente[]>([])

    useEffect(obter_todos,[])// alterar estado na incialização do componente 

    function obter_todos(){

        repo.obter_todos().then(clientes=> {
            set_clientes(clientes)
            exibir_tabela()
        } )
    }

    async function salvar_cliente (cliente: Cliente){
        await  repo.salvar(cliente)
        obter_todos()
    }

    function novo_cliente (){
        set_cliente(Cliente.vazio())
        exibir_formulario() 
    }

    function selecionar_cliente(cliente:Cliente){
        set_cliente(cliente)
        exibir_formulario()
    }
    
    async function excluir_cliente(cliente:Cliente){
        await repo.excluir(cliente)
        obter_todos()
    }


    return{
        cliente,
        clientes,
        novo_cliente,
        salvar_cliente,
        excluir_cliente,
        selecionar_cliente,
        obter_todos,
        tabela_visivel,
        formulario_visivel,
        exibir_tabela,
        exibir_formulario
    }
}