import "../src/CSS/global.css"
import Header from './Componentes/header.jsx'
import Inicio from './Componentes/Inicio.jsx'
import Vantagens from "./Componentes/vantagens.jsx"
import Cardapio from "./Componentes/Cardapio.jsx"
import Sobre from "./Componentes/Sobre.jsx"
import Footer from "./Componentes/footer.jsx"
import Localizacao from "./Componentes/Localizacao.jsx"
import Contato from "./Componentes/Contato.jsx"
function App() {
  return (
<div> 
  <div>
 <Header />
<Inicio />
<Vantagens />
<Cardapio />
<Sobre />
<Localizacao />
<Contato />
<Footer />
 </div>
</div>
  )
}

export default App
