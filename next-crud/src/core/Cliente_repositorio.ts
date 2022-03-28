import Cliente from "./Cliente"

export default interface Cliente_repositorio{
    salvar(cliente:Cliente): Promise<Cliente>
    excluir(cliente:Cliente): Promise<void>
    obter_todos(): Promise<Cliente[]>
}