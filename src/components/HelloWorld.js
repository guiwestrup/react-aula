import Frase from "./Frase";

function HelloWorld(){
  return (
    <div>
      <h1>Meu primeiro componente</h1>
      <Frase/>
      <p>Mais um bom dia</p>
      <Frase/>
    </div>
  )
}

export default HelloWorld;