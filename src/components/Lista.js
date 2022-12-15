import Item from "./Item";
function Lista() {
  return (
    <>
      <h1>Minha lista de marcas:</h1>
      <ul>
        <Item marca="Ford"/>
        <Item marca="VolksWagen"/>
        <Item marca="Samsung"/>
        <Item marca="Blitzwolf"/>
      </ul>
    </>
  )
}

export default Lista;