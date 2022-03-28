import Cliente from '../core/Cliente'
import { Icone_edicao, Icone_lixo } from './icones'


interface Tabela_props{
    clientes: Cliente[]
    cliente_selecionado?: (cliente:Cliente) => void
    cliente_excluido?: (cliente:Cliente) => void

}

export default function Tabela(props){

    const exibir_acoes = props.cliente_excluido || props.cliente_selecionado 

    function Renderizar_cabecalho(){

        return(
            <tr>
                <th className='text-left p-4'>Codigo</th>
                <th className='text-left p-4'>Nome</th>
                <th className='text-left p-4'>Idade</th>

                {exibir_acoes? (<th className='text-venter p-4'>Ações</th>):false}
            </tr>
        )
    }

    function Renderizar_acoes(cliente : Cliente){

        return(
            <td className='flex justify-center '>

                {props.cliente_selecionado? (<button className='flex justify-center item-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1' 
                onClick={() => props.cliente_selecionado ?.(cliente)}>{Icone_edicao}</button>
                ):false}

                {props.cliente_excluido? (<button className='flex justify-center item-center text-red-500 rounded-full hover:bg-purple-50 p-2 m-1' 
                onClick={() => props.cliente_excluido ?.(cliente)}>{Icone_lixo}</button>
                ):false}

                

            </td>
        )
    }

    function Renderizar_dados(){
        return props.clientes?.map((cliente,i)=> {
            return(
                <tr key={cliente.id} className={`${i%2 === 0 ? 'bg-purple-200': 'bg-purple-100'}`}>
                    <td className='text-left p-4'>{cliente.id}</td>
                    <td className='text-left p-4'>{cliente.nome}</td>
                    <td className='text-left p-4'>{cliente.idade}</td>
                    {exibir_acoes? Renderizar_acoes(cliente) : false}
                </tr>
            )
        })
    }
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`bg-gradient-to-r from-purple-500 to-purple-500 text-gray-100`}> {Renderizar_cabecalho()} </thead>
            
            <tbody> {Renderizar_dados()} </tbody>
        </table>
    )
}