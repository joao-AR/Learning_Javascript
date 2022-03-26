import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado(){
    
    const [numero,set_Numero] = useState(0) // usando destructuring

    function incrementar(){
        set_Numero(numero + 1 )
    }
    return(
        <Layout titulo = "componente com estado">
            <div>{numero}</div>
            <button onClick={incrementar}> Incrementar </button>

        </Layout>
        
    )
}