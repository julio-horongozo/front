import { useNavigate, useParams } from 'react-router-dom';
import './Detalhes.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.js';
import { toast } from 'react-toastify';
import api from '../../API/api.js';

function Detalhes(){

    const { id } = useParams();
    const navigate = useNavigate();
    const [ quantidade, setQuantidade] = useState(1);
    const [ nomeProduto , setNomeProduto ] = useState('');
    const [ codigoProduto , setCodigoProduto ] = useState('');
    const [ destaqueProduto , setDestaqueProduto ] = useState('');
    const [ detalhesProduto , setDetalhesProduto ] = useState('');
    const [ imagemProduto , setImagemProduto ] = useState('');
    const [ precoProduto , setPrecoProduto ] = useState('');

    const { user } = useContext(AuthContext);

    useEffect(() => {
      if (id) {
        api.get(`/readProduct/${id}`)
          .then((response) => {
            const { codigo, titulo, detalhes, imagem, preco, destaque } = response.data
            setCodigoProduto(codigo);
            setNomeProduto(titulo);
            setDetalhesProduto(detalhes);
            setImagemProduto(imagem);
            setPrecoProduto(preco);
            setDestaqueProduto(destaque);
             
          })
          .catch((err) => {
            console.log("ops! ocorreu um erro" + err);
          });
      }
    }, [id]);

      const handleChangeQuantidade = Event => {

        setQuantidade(Event.target.value);

      }

      const mais = () => {
        
        setQuantidade(quantidade + 1)
        
    
    }
      const menos = () => {
        if (quantidade == 1){

           console.log("Quantidade igual a 1!")

        }else{

            setQuantidade(quantidade - 1)

        }
    }

      
    async function adicionarCarrinho(e){

      

      if (user){
        api.post('/adicionarCarrinho', {
          produto: id,
          quantidade: quantidade,
          nome: user.uid,
          preco: parseFloat(precoProduto)
        })
        .then(() => {
          toast.success("Produto Adicionado ao Carrinho")
        })
        .catch((error) => {
          console.log("ERRO " + error)
        })
    
    
      }else {

        toast.error("Faça o log-in Primeiramente!")

      }

    }


    return(


      
        
        <><Container>
      <Row>
        <Col xs={12} md={6}>
          <Image src={imagemProduto} rounded style={{ width: '100%' }} />
        </Col>

        <Col xs={12} md={6}>
          <Card style={{ width: '100%', border: '0' }}>
            <Card.Body>

              <Card.Title className='descricaoproduto'>{nomeProduto}</Card.Title>

              <hr></hr>
              <Card.Text className='descricaoproduto' style={{fontSize: "12px"}}>SKU: {codigoProduto}</Card.Text>
              <Card.Text className='descricaoproduto'>Por Apenas:</Card.Text>
              <Card.Text className='valorproduto'>R${precoProduto}</Card.Text>

              <Form.Group controlId='quantidade'>
              <InputGroup className="mb-3" style={{height: '35px', width: '25%'}}>                
                <Button type='submit' id='zoomout' style={{backgroundColor: '#9cac74', borderColor: '#9cac74', width: '30%'}} onClick={menos}>-</Button>
                <Form.Control
                  readOnly
                  style={{textAlign: 'center', width: '40px'}}
                  inputMode='numeric'
                  value={quantidade}
                  onChange={handleChangeQuantidade}
                  />                  
                <Button type='submit' id='zoomout' style={{backgroundColor: '#9cac74', borderColor: '#9cac74', width: '30%'}} onClick={mais}>+</Button>
              </InputGroup>
              </Form.Group>
                <Button id='zoomout' style={{borderColor: '#9cac74', backgroundColor: '#9cac74' }} onClick={adicionarCarrinho}>
                  Adicionar ao Carrinho
                </Button>
                <p></p>



              <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg> Em até 12x no cartão</i>
            </Card.Body>
          </Card>
          <br></br>
          


        </Col>





      </Row>

      <br></br>
      <Card style={{width: "100%"}}>
      <Card.Body>
        <Card.Title>Descrição do Produto</Card.Title>
        <hr></hr>
        <Card.Text>{detalhesProduto}</Card.Text>
      </Card.Body>
    </Card>


    </Container><br></br></>
        
    );


}

export default Detalhes;