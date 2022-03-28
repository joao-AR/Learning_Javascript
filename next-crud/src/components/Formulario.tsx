import { useState } from "react"
import Cliente from "../core/Cliente"
import Entrada from "./Entrada"
import Botao from "./Botao"

interface Formulario_props {
    cliente: Cliente
    cliente_mudou?:(cliente:Cliente) => void 
    cancelado?: () => void
}
export default function Formulario(props: Formulario_props){
    const id = props.cliente?.id
    const [nome,set_nome] = useState(props.cliente?.nome ?? '')
    const [idade,set_idade] = useState(props.cliente?.idade ?? 0)

    return(
        <div>
            {id? (<Entrada somente_leitura texto="Codigo" valor={id}/> ):false}

            <Entrada texto="Nome" valor={nome} valor_mudou={set_nome} className="mb-4" />
            <Entrada texto="Idade" tipo="number" valor={idade}  valor_mudou={set_idade} className="mb-4" />

            <div className="flex justify-end mt-7">
                <Botao onClick={() => props.cliente_mudou?.(new Cliente(nome,+idade,id))} cor="blue" className="mr-2">{id? 'Alterar': 'Salvar'} </Botao>
                <Botao onClick ={props.cancelado}cor="gray">Cancelar</Botao>
            </div>
            
        </div>
    )
}