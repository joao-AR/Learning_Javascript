import Layout from "../components/Layout"

export default function Jsx(){
    const a = 50
    const b = 2
    console.log(a*b)

    return (
        <Layout titulo = "entendendo JSX">
            <h1>JSX é um conceito central </h1>
            { /*Para colocar um trecho em JS em uma parte JSX tem que colocar {} e escrever JS dentro*/
                a*b
            }

            <h2>{"Teste".toUpperCase()}</h2>

            <p>
                {JSON.stringify({nome:'joao',idade: 30})}
            </p>
        </Layout>
    )
}