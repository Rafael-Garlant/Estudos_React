export default function Evento( {numero} ){

  function meuEvento(){
    console.log(`Ativou o evento! ${numero}`)
  }


  return(
    <div>
      <p>Clique para disparar um eveneto.</p>
      <button onClick={meuEvento}>Clique</button>
    </div>

  )
}