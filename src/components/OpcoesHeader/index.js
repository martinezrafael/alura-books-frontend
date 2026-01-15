import styled from "styled-components";
const textoOpcoes = ["Categorias", "Favoritos", "Minha Estante"];

const Opcoes = styled.ul`
  align-items: center;
  display: flex;
  gap: 10px;
`;

const Opcao = styled.li`
  font-size: 18px;
  font-weight: bold;
  min-width: 120px;
  text-transform: uppercase;
  cursor: pointer;
`;

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => {
        return <Opcao>{texto}</Opcao>;
      })}
    </Opcoes>
  );
}

export default OpcoesHeader;
