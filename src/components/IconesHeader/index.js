import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";

import styled from "styled-components";

const ListaContainer = styled.ul`
  align-items: center;
  display: flex;
  gap: 10px;
}
`;

const Icone = styled.li`
  width: 25px;
`;

const icones = [perfil, sacola];

function iconesHeader() {
  return (
    <ListaContainer>
      {icones.map((icone) => {
        return (
          <Icone>
            <img src={icone} alt="Icone" />
          </Icone>
        );
      })}
    </ListaContainer>
  );
}

export default iconesHeader;
