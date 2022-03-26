import Layout from "../../components/Layout";
import {useRouter} from 'next/router'
export default function Cliente_pro_codigo(){

    const router = useRouter()
    return (
        <Layout titulo="Navegação dinamica">
        <span>Código = {router.query.codigo}</span>
        </Layout>
    )
    
}