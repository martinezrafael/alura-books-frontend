import "./style.css";
const textoOpcoes = ["Categorias", "Favoritos", "Minha Estante"];

function OpcoesHeader() {
  return (
    <ul className="opcoes">
      {textoOpcoes.map((texto, index) => {
        return <li className={`opcao opcao-${index + 1}`}>{texto}</li>;
      })}
    </ul>
  );
}

export default OpcoesHeader;
