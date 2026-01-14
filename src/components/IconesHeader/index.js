import "./style.css";

import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";

const icones = [perfil, sacola];

function iconesHeader() {
  return (
    <ul className="icons">
      {icones.map((icone) => {
        return (
          <li>
            <img src={icone} alt="Icone" />
          </li>
        );
      })}
    </ul>
  );
}

export default iconesHeader;
