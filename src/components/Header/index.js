import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import quimicainovapro from "../img/Quimica (1).png";
import "./styles.css";
import api from '../../API/api.js';
import { useContext} from "react";
import { AuthContext } from "../../context/auth";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const { user, signed } = useContext(AuthContext);

  const Navigate = useNavigate();

  function verificarLoginPerfil() {
    if (!signed) {
      Navigate("/login");
    } else {
      Navigate("/perfil");
    }
  }

  function verificarLoginCarrinho() {
    if (!signed) {
      Navigate("/login");
    } else {
      checkToken();
    }
  }

  async function checkToken() {

    const token = user.token

    api.post("/check-token", {
      token: token
    })
      .then(response => {
        Navigate("/carrinho");
      })
      .catch(error => {
        console.error(error);
      });

  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="navegacao">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={quimicainovapro} alt="" id="imagemlogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Button href="/" id="botaoPerfil" style={{ color: "#3c4c63" }}>
              Home
            </Button>
            <Button href="/sobre" id="botaoPerfil" style={{ color: "#3c4c63" }}>
              Sobre
            </Button>
            <Button
              href="/produtos"
              id="botaoPerfil"
              style={{ color: "#3c4c63" }}
            >
              Produtos
            </Button>
            <Button onClick={verificarLoginPerfil} id="botaoPerfil">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
              <span> Perfil </span>
            </Button>
            <Button href="/admin" id="admin" style={{ color: "#3c4c63" }}>
              Painel Admin
            </Button>
          </Nav>

          <Button
            onClick={verificarLoginCarrinho}
            style={{ margin: "20px" }}
            id="botaoPerfil"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
