import styles from './Estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
export default function Estiloso(){
    return (
        <Layout> 
            <div className={styles.roxo}>

            <Link href="/">Voltar</Link>
            <h1>Estilo Usando CSS Modulos </h1>
            </div>
        </Layout>
        
    )
}