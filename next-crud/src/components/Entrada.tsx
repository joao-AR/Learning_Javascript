interface Entrada_props {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somente_leitura?: boolean
    className?: string
    valor_mudou?:(valor: any) => void 
}
export default function Entrada(props: Entrada_props){
    
    return(
        <div className = {`flex flex-col ${props.className}`} >
            <label className="mb-2">
                {props.texto}
            </label>

            <input type={props.tipo ?? 'text'}
            value = {props.valor} readOnly= {props.somente_leitura}

            className ={`
                border border-purple-500 rounded-lg 
                focus:outline-none bg-gray-100 px-4 py-2
                ${props.somente_leitura ? '':'focus:bg-white'}
            `}

            onChange = {e => props.valor_mudou?.(e.target.value)}
            />
        </div>
        

    )
}