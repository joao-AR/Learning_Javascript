import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao(){
    const [cliente,set_cliente]= useState({})
    const [codigo,set_codigo]= useState(1)
        
        /*function obter_Cliente(){

        fetch(`http://localhost:3000/api/clientes/${codigo}`)
            .then(resp => resp.json())
            .then(dados => set_cliente(dados))
        }*/

        async function obter_Cliente(){

        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
            const dados = await resp.json()
            set_cliente(dados)
        }
        return(
        <Layout titulo = "Integração com api 1">
            
            <div>
                <input type="number" value={codigo} onChange={e => set_codigo( e.target.value)}/>
                <button onClick={obter_Cliente}>Obter cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id} </li>
                <li>Nome: {cliente.nome}</li>
                <li>Email:{cliente.email} </li>
            </ul>
        </Layout>
    )
}