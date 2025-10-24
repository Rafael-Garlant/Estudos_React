export default function Form(){

  function cadastrarUsuario(e){
    e.preventDefault();
    console.log("Cadastrou usuário")
  }
  
  return(
    <div>
      <h1>Formulário</h1>
      <form onSubmit={cadastrarUsuario}>
        <input type="text" placeholder="Digite seu nome"/>
        <input type="email" placeholder="Digite seu email"/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}