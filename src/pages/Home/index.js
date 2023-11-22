import './styles.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cadinho from './cadinho.png';
import Bequer from './bequer.png';
import Algodao from './algodao.png';
import Almofariz from './almofariz.png';
import Bico from './bico.png';
import Condutivimetro from './condutivimetro.png';
import Densimetro from './densimetro.png';
import Exodo from './exodo.png';
import Funil from './funil.png';
import GarraAranha from './garra_aranha.png';
import Garra from './garra.png';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import banner1 from './banner1.png';
import banner2 from './banner2.png';
import banner3 from './banner3.png';
import Rolha from './rolha.png'



function Home() {
  return (
  
        <><MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem itemId={1}>
          <img src={banner1} className='d-block w-100' alt='...' />
        </MDBCarouselItem>
  
        <MDBCarouselItem itemId={2}>
          <img src={banner2} className='d-block w-100' alt='...' />
        </MDBCarouselItem>
  
        <MDBCarouselItem itemId={3}>
          <img src={banner3} className='d-block w-100' alt='...' />
        </MDBCarouselItem>
      </MDBCarousel><div className='col-12'>
        <br></br>

        <div class="col-6">
                        <h3 class="mb-3">Aproveite as ofertas!</h3>

                    
        </div>
        
        
        <Carousel>
          
          <Carousel.Item>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">

                  
                  <div class="col-md-3" id='zoomin'>
                  <a type='button' href='/cadinho' style={{textDecoration: 'none'}}>
                    <Card>
                      <Card.Img variant="top" src={Cadinho} />
                      <Card.Body>
                        <Card.Title className='descricaoproduto'>Cadinho Fusao De Porcelana Forma Alta 125mL</Card.Title>
                        <Card.Text className='descricaoproduto'>Por Apenas:</Card.Text>

                        <Card.Text className='valorproduto'>R$32,00</Card.Text>
                        <a type="button" href='/cadinho' class="btn btn-success botaocompra" id='zoomout' style={{ backgroundColor: '#9cac74', borderColor: '#9cac74', color: '#fff' }} >Comprar agora</a>
                      </Card.Body>
                    </Card>
                    </a>
                  </div>
                  

                  
                  <div class="col-md-3" id='zoomin'>
                  <a type='button' href='/algodao' style={{textDecoration: 'none'}}>
                    <Card>
                      <Card.Img variant="top" src={Algodao} />
                      <Card.Body>
                        <Card.Title className='descricaoproduto'>Algodão Hidrófilo Não Estéril Em Rolo 500g</Card.Title>
                        <Card.Text className='descricaoproduto'>Por Apenas:</Card.Text>

                        <Card.Text className='valorproduto'>R$1,50</Card.Text>
                        <a type="button" class="btn btn-success botaocompra" id='zoomout' style={{ backgroundColor: '#9cac74', borderColor: '#9cac74', color: '#fff' }} href='/algodao'>Comprar agora</a>
                      </Card.Body>
                    </Card>
                    </a>
                  </div>
                  

                  <div class="col-md-3" id='zoomin'>
                  <a type='button' href='/almofariz' style={{textDecoration: 'none'}}>
                    <Card>
                      <Card.Img variant="top" src={Almofariz} />
                      <Card.Body>
                        <Card.Title className='descricaoproduto'>Almofariz Com Pistilo de Ágata (Gral Com Pistilo)</Card.Title>
                        <Card.Text className='descricaoproduto'>Por Apenas:</Card.Text>

                        <Card.Text className='valorproduto'>R$100,00</Card.Text>
                        <a type="button" class="btn btn-success botaocompra" id='zoomout' style={{ backgroundColor: '#9cac74', borderColor: '#9cac74', color: '#fff' }} href='/almofariz'>Comprar agora</a>
                      </Card.Body>
                    </Card>
                    </a>
                  </div>

                  <div class="col-md-3" id='zoomin'>
                  <a type='button' href='/bequer' style={{textDecoration: 'none'}}>
                    <Card>
                      <Card.Img variant="top" src={Bequer} />
                      <Card.Body>
                        <Card.Title className='descricaoproduto'>Bequer Vidro Borosolicato Forma Baixa 250mL</Card.Title>
                        <Card.Text className='descricaoproduto'>Por Apenas:</Card.Text>

                        <Card.Text className='valorproduto'>R$10,50</Card.Text>
                        <a type="button" class="btn btn-success botaocompra" id='zoomout' style={{ backgroundColor: '#9cac74', borderColor: '#9cac74', color: '#fff' }} href='/bequer'>Comprar agora</a>
                      </Card.Body>
                    </Card>
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </Carousel.Item>


          <Carousel.Item>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-md-3 mb-3" id='zoomin'>
                  <a type='button' href='/bico' style={{textDecoration: 'none'}}>
                    <Card>
                      <Card.Img variant="top" src={Bico} />
                      <Card.Body>
                        <Card.Title className='descricaoproduto'>Bico Teclu Sem Registro Ø 11Mm Altura 15Cm</Card.Title>
                        <Card.Text className='descricaoproduto'>Por Apenas:</Card.Text>

                        <Card.Text className='valorproduto'>R$199,00</Card.Text>
                        <a type="button" class="btn btn-success botaocompra" id='zoomout' style={{ backgroundColor: '#9cac74', borderColor: '#9cac74', color: '#fff' }} href='/bico'>Comprar agora</a>
                      </Card.Body>
                    </Card>
                    </a>
                  </div>



                  <div class="col-md-3 mb-3" id='zoomin'>
                  <a type='button' href='/condutivimetro' style={{textDecoration: 'none'}}>
                    <Card>
                      <Card.Img variant="top" src={Condutivimetro} />
                      <Card.Body>
                        <Card.Title className='descricaoproduto'>Condutivimetro de Bolso (Medidor De Condutividade)</Card.Title>
                        <Card.Text className='descricaoproduto'>Por Apenas:</Card.Text>

                        <Card.Text className='valorproduto'>R$70,00</Card.Text>
                        <a type="button" class="btn btn-success botaocompra" id='zoomout' style={{ backgroundColor: '#9cac74', borderColor: '#9cac74', color: '#fff' }} href='/condutivimetro'>Comprar agora</a>
                      </Card.Body>
                    </Card>
                    </a>
                  </div>

                  <div class="col-md-3 mb-3" id='zoomin'>
                  <a type='button' href='/densimetro' style={{textDecoration: 'none'}}>
                    <Card>
                      <Card.Img variant="top" src={Densimetro} />
                      <Card.Body>
                        <Card.Title className='descricaoproduto'>Densímetro Massa Específica 1,000/1,100G/ML</Card.Title>
                        <Card.Text className='descricaoproduto'>Por Apenas:</Card.Text>

                        <Card.Text className='valorproduto'>R$149,00</Card.Text>
                        <a type="button" class="btn btn-success botaocompra" id='zoomout' style={{ backgroundColor: '#9cac74', borderColor: '#9cac74', color: '#fff' }}>Comprar agora</a>
                      </Card.Body>
                    </Card>
                    </a>
                  </div>

                  <div class="col-md-3 mb-3" id='zoomin'>
                  <a type='button' href='/exodo' style={{textDecoration: 'none'}}>
                    <Card>
                      <Card.Img variant="top" src={Exodo} />
                      <Card.Body>
                        <Card.Title className='descricaoproduto'>Solução Tampão (buffer) pH 9,0 500mL - Exodo</Card.Title>
                        <Card.Text className='descricaoproduto'>Por Apenas:</Card.Text>

                        <Card.Text className='valorproduto'>R$20,00</Card.Text>
                        <a type="button" class="btn btn-success botaocompra" id='zoomout' style={{ backgroundColor: '#9cac74', borderColor: '#9cac74', color: '#fff' }} href='/exodo'>Comprar agora</a>
                      </Card.Body>
                    </Card>
                    </a>
                  </div>


                </div>
              </div>

            </div>
          </Carousel.Item>


          <Carousel.Item>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-md-3 mb-3" id='zoomin'>
                  <a type='button' href='/funil' style={{textDecoration: 'none'}}>
                    <Card>
                      <Card.Img variant="top" src={Funil} />
                      <Card.Body>
                        <Card.Title className='descricaoproduto'>Funil Para Uso Em Laboratorio PP Ø 100Mm Autoclavel</Card.Title>
                        <Card.Text className='descricaoproduto'>Por Apenas:</Card.Text>

                        <Card.Text className='valorproduto'>R$15,00</Card.Text>
                        <a type="button" class="btn btn-success botaocompra" id='zoomout' style={{ backgroundColor: '#9cac74', borderColor: '#9cac74', color: '#fff' }} href='/funil'>Comprar agora</a>
                      </Card.Body>
                    </Card>
                    </a>
                  </div>



                  <div class="col-md-3 mb-3" id='zoomin'>
                  <a type='button' href='/rolha' style={{textDecoration: 'none'}}>
                    <Card>
                      <Card.Img variant="top" src={Rolha} />
                      <Card.Body>
                        <Card.Title className='descricaoproduto'>Rolha Cônica Borracha Branca Com Furo</Card.Title>
                        <Card.Text className='descricaoproduto'>Por Apenas:</Card.Text>

                        <Card.Text className='valorproduto'>R$5,00</Card.Text>
                        <a type="button" class="btn btn-success botaocompra" id='zoomout' style={{ backgroundColor: '#9cac74', borderColor: '#9cac74', color: '#fff' }} href='/rolha'>Comprar agora</a>
                      </Card.Body>
                    </Card>
                    </a>
                  </div>

                  <div class="col-md-3 mb-3" id='zoomin'>
                  <a type='button' href='/garra_aranha' style={{textDecoration: 'none'}}>
                    <Card>
                      <Card.Img variant="top" src={GarraAranha} />
                      <Card.Body>
                        <Card.Title className='descricaoproduto'>Garra Para Bureta Castaloy Tipo Aranha</Card.Title>
                        <Card.Text className='descricaoproduto'>Por Apenas:</Card.Text>

                        <Card.Text className='valorproduto'>R$350,00</Card.Text>
                        <a type="button" class="btn btn-success botaocompra" id='zoomout' style={{ backgroundColor: '#9cac74', borderColor: '#9cac74', color: '#fff' }} href='/garra_aranha'>Comprar agora</a>
                      </Card.Body>
                    </Card>
                    </a>
                  </div>

                  <div class="col-md-3 mb-3" id='zoomin'>
                  <a type='button' href='/garra' style={{textDecoration: 'none'}}>
                    <Card>
                      <Card.Img variant="top" src={Garra} />
                      <Card.Body>
                        <Card.Title className='descricaoproduto'>Garra Para Tubo De Ensaio De Polipropileno 18Cm</Card.Title>
                        <Card.Text className='descricaoproduto'>Por Apenas:</Card.Text>

                        <Card.Text className='valorproduto'>R$187,00</Card.Text>
                        <a type="button" class="btn btn-success botaocompra" id='zoomout' style={{ backgroundColor: '#9cac74', borderColor: '#9cac74', color: '#fff' }} href='/garra'>Comprar agora</a>
                      </Card.Body>
                    </Card>
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </Carousel.Item>

        </Carousel>

        <br></br>
        <br></br>

      </div></>
    
  );

}

export default Home;