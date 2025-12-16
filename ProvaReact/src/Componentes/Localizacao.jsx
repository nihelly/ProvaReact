import "../CSS/localizacao.css"

function Localizacao () {

  return (
    <><div>
      <h1>Onde Estamos</h1>
      <p>Nosso ponto de retirada e cozinha central está localizado em:</p>
      <h3>Rua dos Sabores, 123 |Bairro Saúde | Cidade/UF</h3>

    </div><section className="mapa">
      <iframe src="https://maps.app.goo.gl/rg6xL9GeSaGkhT997"
      
      ></iframe>
      </section></>
    

  )
}

export default Localizacao