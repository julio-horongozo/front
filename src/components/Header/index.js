import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import quimicainovapro from '../img/Quimica (1).png';
import './styles.css'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='navegacao'>
      <Container fluid>
        <Navbar.Brand href="/"><img src={quimicainovapro} alt="" id='imagemlogo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/">Acessórios Diversos</NavDropdown.Item>
              <NavDropdown.Item href="/">Porcelana e Afins</NavDropdown.Item>
              <NavDropdown.Item href="/">Soluções</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Procurar"
              className="me-2"
              aria-label="Search"
              id='pesquisa'
            />
            <Button variant="outline-success" id='pesquisa'>Procurar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;