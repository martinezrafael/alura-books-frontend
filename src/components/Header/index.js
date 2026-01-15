import Logotype from "../Logotype";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import "./style.css";

import styled from "styled-components";

const HeaderContainer = styled.header`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logotype />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
