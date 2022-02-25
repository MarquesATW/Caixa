import { useState } from 'react';
import { Comanda, Container, Status, Title, Consumed, Valor } from './styles';
interface ITableProps{
  title: string;
}
export function Table({title} : ITableProps){
  const [ShowTable, setShowTable] = useState(false);
  return(
    <>
    <Container>
      <Title>{title}<Status /></Title>
      
      <button  type="button" onClick={() => setShowTable(true)}>VER</button>
    </Container>
    
    <Comanda isOpen={ShowTable}>
      <Consumed>
        Itens Consumidos:
      </Consumed>
      <Valor>
        Total da Mesa:
      </Valor>
      <button type="button" onClick={() => setShowTable(false)}>Voltar</button>
    </Comanda>
    </>
  )
}