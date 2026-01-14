import "./App.css";
import Logotype from "./components/Logotype";
import OpcoesHeader from "./components/OpcoesHeader";
import IconesHeader from "./components/IconesHeader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logotype />
        <OpcoesHeader />
        <IconesHeader />
      </header>
    </div>
  );
}

export default App;
