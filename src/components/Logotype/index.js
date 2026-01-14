import "./style.css";
import logoImage from "../../images/logo.svg";

function Logotype() {
  return (
    <div className="logotype">
      <img
        src={logoImage}
        alt="Logotipo Alura Books"
        className="logotype__image"
      />
      <p>
        <strong>Alura</strong>
        Books
      </p>
    </div>
  );
}

export default Logotype;
