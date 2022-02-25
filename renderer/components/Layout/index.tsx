import { FaHamburger } from "react-icons/fa";
import { Container } from "./styles";

export function Layout(){
  return(
    <Container>
      <img src="/assets/download.svg" alt="logo" />
      <a href="/Table">
      <FaHamburger />
      Mesas
      </a>
    </Container>
  )
}