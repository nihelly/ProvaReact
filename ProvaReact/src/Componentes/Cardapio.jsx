import "../CSS/cardapio.css"
import Cardpratos from "./CardPratos"

function Cardapio () {

  return (
    <><div className="cardapio">
      <h1 className="cardap-title">Nosso Cardápio da Semana</h1>
      <p className="linhac"></p>
      <div className="cards">
        <div className="card"><Cardpratos /></div>
        <div className="card"><Cardpratos /></div>
        <div className="card"><Cardpratos /></div>
        <div className="card"><Cardpratos /></div>
        </div>
      </div></>
  )
}

export default Cardapio