import "./App.css";
import Logotype from "./components/Logotype";

const textoOpcoes = ["Categorias", "Favoritos", "Minha Estante"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logotype />
        <ul className="opcoes">
          {textoOpcoes.map((texto, index) => {
            return <li className={`opcao opcao-${index + 1}`}>{texto}</li>;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
