import logoImage from "../../images/logo.svg";

import styled from "styled-components";

const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 30px;
`;

const LogoImage = styled.img`
  margin-right: 10px;
`;

function Logotype() {
  return (
    <LogoContainer>
      <LogoImage src={logoImage} alt="Logotipo Alura Books" />
      <p>
        <strong>Alura</strong>
        Books
      </p>
    </LogoContainer>
  );
}

export default Logotype;
