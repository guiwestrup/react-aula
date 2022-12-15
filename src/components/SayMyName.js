function SayMyName(props) {
  return (
    <div>
      <p>Fala aí {props.name}, suave?</p>
      <p>Ou posso te chamar de: {props.nickname}</p>
    </div>
  )
}

export default SayMyName;