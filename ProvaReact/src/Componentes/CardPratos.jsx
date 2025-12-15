import "../CSS/cardpratos.css"

function Cardpratos () {

  return (
    <div className="cardproduct">
      <img
        src="https://imagem.band.com.br/69/f_374169.jpg"
        className="cardimage"
        alt="" 
      />
      
      <h3 className="cardtitle">Frango com Batata Doce</h3>
      <p>350 kcal|Sem Glúten</p>
      <span className="cardprice">R$ 24,90</span>
      <button className="cardbutton">Adicionar</button>
    </div>
  )
}

export default Cardpratos