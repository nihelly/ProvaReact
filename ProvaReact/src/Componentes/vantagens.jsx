import "../CSS/vantagens.css"
import Cardingredientes from "./CardIngredientes"

function Vantagens () {

  return (
   <><div className="conteiner-vantagens">
      <h1 className="vant-text">Por que escolher a Restaurante Popular Saudável?</h1>
      <p className="linhav"></p>
    </div><div className="card-ing">
        <Cardingredientes />
        <Cardingredientes />
        <Cardingredientes />
      </div></>
  )
}

export default Vantagens