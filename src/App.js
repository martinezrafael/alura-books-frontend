import "./App.css";
import Logotype from "./components/Logotype";
import perfil from "./images/perfil.svg";
import sacola from "./images/sacola.svg";

const textoOpcoes = ["Categorias", "Favoritos", "Minha Estante"];
const icones = [perfil, sacola];

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
        <ul className="icons">
          {icones.map((icone) => {
            return <img src={icone} alt="Icone" />;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
