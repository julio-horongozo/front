import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css'

function Contato() {
  return (
    <Form className='formulario'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Digite Seu E-mail</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Digite sua Mensagem:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" id='botaoenviar' style={{}}>Enviar</Button>{' '}
    </Form>
    
  );
}

export default Contato;