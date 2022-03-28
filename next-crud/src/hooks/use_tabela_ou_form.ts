import { useState } from "react";

export default function use_tabela_ou_form(){

    const [visivel,set_visivel] = useState<'tabela' | 'form'>('tabela')

    const exibir_tabela = () => set_visivel('tabela')
    const exibir_formulario = () => set_visivel('form')
    return{
        formulario_visivel: visivel === 'form',
        tabela_visivel: visivel === 'tabela',
        exibir_tabela,
        exibir_formulario
    }
}