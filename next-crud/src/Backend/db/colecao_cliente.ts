import Cliente from "../../core/Cliente";
import Cliente_repositorio from "../../core/Cliente_repositorio";
import firebase from "../config";

export default class Colecao_cliente implements Cliente_repositorio{
    
    #conversor = {
        toFirestore(cliente:Cliente){
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot,options: firebase.firestore.SnapshotOptions):Cliente{
            const dados = snapshot.data(options)
            return new Cliente(dados.nome,dados.idade,snapshot?.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente>{
        
        if(cliente?.id){ // se já existir o id 
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        }else{ // novo cliente
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(cliente: Cliente): Promise<void>{
        return this.colecao().doc(cliente.id).delete()
    }
    async obter_todos(): Promise<Cliente[]> {
        
        const query = this.colecao().get()
        return (await query).docs.map(doc => doc.data()) ?? []
    }   

    private colecao(){
        return firebase.firestore().collection('clientes').withConverter(this.#conversor)
    }
}