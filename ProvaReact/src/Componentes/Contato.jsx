import "../CSS/contato.css"

function Contato () {

  return (
    <section id='Contato' className='section-card-conteiner'>
     <h1 className='section-title-center'>Fale Conosco</h1>
      <p className="linhav"></p>
     <form className='contact-form'>
        <input type="text" placeholder='Nome' className='contact-input'/>
        <input placeholder='Email' className='contact-input'></input>
        <button type='submit' className='contact-button'>Enviar Mensagem </button>
     </form>
   </section>
  )
}

export default Contato