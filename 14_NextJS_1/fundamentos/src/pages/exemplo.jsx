import Cabecalho from "../components/cabecalho";
import Layout from "../components/Layout";

export default function Exemplo(){

    return(
        <Layout titulo= "usando Componente">
            <Cabecalho titulo = "Next.js & react"/>
            <Cabecalho titulo = "aprenda Next.js na pratica"/>
        </Layout>
    )
}