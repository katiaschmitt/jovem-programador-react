import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


export default function MenuSuperior() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Jovem Programador</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/alunos">Alunos</Nav.Link>
          <Nav.Link href="/sobre">Sobre</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
