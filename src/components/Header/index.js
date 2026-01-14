import Logotype from "../Logotype";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import "./style.css";

function Header() {
  return (
    <header className="App-header">
      <Logotype />
      <OpcoesHeader />
      <IconesHeader />
    </header>
  );
}

export default Header;
