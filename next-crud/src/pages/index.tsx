import Botao from "../components/Botao"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Formulario from "../components/Formulario"
import use_clientes from "../hooks/use_clientes"
export default function Home() {

  const {
    cliente,
    clientes,
    novo_cliente,
    selecionar_cliente,
    excluir_cliente,
    salvar_cliente, 
    tabela_visivel,
    formulario_visivel,
    exibir_tabela,
    
    
  } = use_clientes()
  return (
      <div className={`flex  justify-center items-center h-screen 
      bg-gradient-to-r from-purple-500 to-blue-600 text-white`}>
        
          <Layout titulo="Cadastro Simples">
            {tabela_visivel ? (

              <>
                <div className="flex justify-end">            
                <Botao onClick={novo_cliente} className="mb-4" cor="green">
                  Novo Cliente
                </Botao>
                </div>

                < Tabela clientes={clientes} 
                  cliente_selecionado = {selecionar_cliente} 
                  cliente_excluido = {excluir_cliente}
                >
                </Tabela>
              </>

            ):(
              <Formulario 
                cliente={cliente} 
                cliente_mudou = {salvar_cliente}
                cancelado={exibir_tabela} 
              /> 
            )}
            
          </Layout>  
        
        
        </div>
    )
}
