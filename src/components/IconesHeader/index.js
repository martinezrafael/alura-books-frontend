import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";

import styled from "styled-components";

const Icones = styled.ul`
  align-items: center;
  display: flex;
  gap: 10px;
}
`;

const Icone = styled.li`
  width: 25px;
`;

const Image = styled.img``;

const icones = [perfil, sacola];

function iconesHeader() {
  return (
    <Icones>
      {icones.map((icone) => {
        return (
          <Icone>
            <Image src={icone} alt="Icone" />
          </Icone>
        );
      })}
    </Icones>
  );
}

export default iconesHeader;
