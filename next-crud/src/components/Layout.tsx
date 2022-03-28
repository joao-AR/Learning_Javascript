import Titulo from "./Titulo"


interface Layout_props{
    titulo: string,
    children: any
}
export default function Layout(props:Layout_props){

    return(
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800
            rounded-md
        `}>
            <Titulo>{props.titulo}</Titulo>
            
            <div className="p-6">
                {props.children}
            </div>
        
        
        </div>
    )
}