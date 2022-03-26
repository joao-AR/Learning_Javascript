import Navegador from "../components/Navegador"
export default function Inicio(){
  return (
    <div style={
      
      { display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap:'wrap',
        height: '100vh'
      }
      
      }>
      <Navegador  texto = "estiloso " destino = "/estiloso"/>
      <Navegador  texto = "exemplo " destino = "/exemplo"/>
      <Navegador  texto = "jsx " destino = "/jsx" cor = "crimson"/>
      <Navegador  texto = "Navegação #01" destino = "/navegacao" cor = "green"/>
      <Navegador  texto = "Navegação #02" destino = "/cliente/123" cor = "blue"/>
      <Navegador  texto = "Componente com estado" destino = "/estado" cor = "pink"/>
      <Navegador  texto = "Integração com api #01" destino = "/integracao_1" cor = "#42a9a9"/>
      <Navegador  texto = "conteudo estatico" destino = "/estatico" cor = "#fa054a"/>



    </div>
  )
}