import styled from "@emotion/styled";

interface IModalProps {
  isOpen: boolean;
}

export const Container = styled.div`
display: flex;
flex-direction: column;

height: 150px;
width: 150px;

background-color:orange;
`;

export const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: white;

gap:5px;
margin-bottom: 80px;
`;

export const Status = styled.div`
height: 20px;
width: 20px;

border-radius: 100%;
background-color:green;
`;

export const Comanda = styled.div<IModalProps>`
visibility: ${props => (props.isOpen === true ? 'visible' : 'hidden')};
height: 250px;
width: 250px;

background-color:gray;

color:white;
`;

export const Consumed = styled.div`
display: flex;
flex-direction: column;
`;

export const Valor = styled.div`
display: flex;
color:white;
font-weight: 900;
`;