import Item from './Item';


export default function List(){
  return(
    <> 
      <h3>Minha Lista de Tarefas</h3>
      <ul>
        <Item marca = 'Ferrari' />
        <Item marca = 'Pobre Fiat' ano_lancamento={1944}/>
      </ul>
    </>
  )
}