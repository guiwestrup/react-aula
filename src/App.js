import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Lista from './components/Lista';

function App() {
  const name = "Fábio";

  return (
    <div className="App">
      <div>
        <Lista/>
        <HelloWorld/>
        <SayMyName name="Guilherme" nickname="Gui"/>
        <SayMyName name="Pedro" nickname="Pe"/>
        <SayMyName name={name} nickname="Nenhum"/>
        <Pessoa
          nome="João"
          profissao="Padeiro"
          idade="19"
          foto="https://via.placeholder.com/150"
        />
      </div>
    </div>
  );
}

export default App;
