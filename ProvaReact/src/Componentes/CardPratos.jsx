import "../CSS/cardpratos.css"

function Cardpratos () {

  return (
    <><div className="cardprato">
      <div className="fundo">
      <img
        src="https://imagem.band.com.br/69/f_374169.jpg"
        className="cardimage"
        alt="" />
    </div><div className="info">
        <h3 className="cardtitle">Frango com Batata Doce</h3>
        <p className="card-text">350 kcal|Sem Glúten</p>
        <strong className="cardprice">R$ 24,90</strong>
        <button className="cardbutton">Adicionar</button>
      </div> 
      </div></>
  )
}

export default Cardpratos