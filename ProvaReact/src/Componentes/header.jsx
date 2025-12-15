import "../CSS/header.css"

function Header () {

  return (
      <header className="headerstyle">
      <div className="headerlogocontainer">
        <span className="logoimage">🥗</span>
        <span className="logotext">Restaurante Popular Saudável</span>
      </div>
      <nav className="navmenu">
        <a href="#inicio" className="navlink">
          {" "}
          Inicio
        </a>
        <a href="#Vantagens" className="navlink">
          {" "}
          Vantagens
        </a>
        <a href="#Cardápio" className="navlink">
          {" "}
          Cardápio
        </a>
        <a href="#Sobrenós" className="navlink">
          {" "}
          Sobre Nós
          </a>
        <a href="#Localização" className="navlink">
          {" "}
          Localização
          </a>
        <a href="#Contato" className="navlink">
          {" "}
          Contato
        </a>
      </nav>
      </header>
  )
}

export default Header