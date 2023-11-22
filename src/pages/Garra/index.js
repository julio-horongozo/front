import Image from 'react-bootstrap/Image';
import garra from '../Home/garra.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';


function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function Garra() {
  
  let aleatorio = gerarNumeroAleatorio();

  const[numero, setCount] = useState(aleatorio);

  const atualizar = () => {

    setCount(numero => (numero = gerarNumeroAleatorio()));

  }

  return (
    <><Container>
      <Row>
        <Col xs={12} md={6}>
          <Image src={garra} rounded style={{ width: '100%' }} />
        </Col>

        <Col xs={12} md={6}>
          <Card style={{ width: '100%', border: '0' }}>
            <Card.Body>

              <Card.Title className='descricaoproduto'>Garra Para Bureta Castaloy Tipo Aranha</Card.Title>

              <hr></hr>              
              <Card.Text className='descricaoproduto'>Por Apenas:</Card.Text>
              <Card.Text className='valorproduto'>R$187,00</Card.Text>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Quantidade"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2" />
                <Button variant="outline-success" id="button-addon2" style={{ borderColor: '#9cac74', color: '#9cac74' }}>
                  Comprar Agora
                </Button>
              </InputGroup>
              <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg> Em até 12x no cartão</i>
            </Card.Body>
          </Card>
          <br></br>
          <Card style={{ width: '100%', border: '0' }}>
            <Card.Body>
              <Card.Title className='descricaoproduto'>Simular o Frete</Card.Title>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="CEP"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2" />
                <Button variant="outline-success" id="button-addon2" style={{ borderColor: '#9cac74', color: '#9cac74' }} onClick={atualizar}>
                  Simular
                </Button>
              </InputGroup>
            </Card.Body>
          </Card>

          <Card style={{ width: '100%', border: '0' }}>
            <Card.Body>
              <Card.Title className='descricaoproduto'>Valor Total: R${numero},00</Card.Title>
            </Card.Body>
          </Card>

        </Col>





      </Row>

      <br></br>
      <Card>
      <Card.Body>
        <Card.Title>Descrição do Produto</Card.Title>
        <hr></hr>
        <Card.Text>
        Lorem ipsum non vel ultricies duis pulvinar donec, aenean nullam elit laoreet tempor phasellus enim iaculis, curabitur consequat metus sapien elementum tempor. eget diam accumsan nec curae consectetur nulla inceptos, lacinia egestas ante condimentum lacus scelerisque at, elementum eu cursus est tempor nullam. viverra feugiat inceptos metus phasellus turpis ut luctus dictumst egestas per, curabitur himenaeos viverra commodo sodales molestie proin pharetra imperdiet, cursus eleifend erat nam etiam quisque libero magna pulvinar. per mollis sed vitae velit blandit sollicitudin nam a nibh imperdiet et euismod senectus etiam massa, nec velit fusce per ligula porta est taciti donec taciti pharetra nunc porttitor. 
        </Card.Text>
      </Card.Body>
    </Card>


    </Container><br></br></>

  );
}

export default Garra;









