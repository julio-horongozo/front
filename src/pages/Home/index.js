import './styles.css'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import banner1 from './banner1.png';
import banner2 from './banner2.png';
import banner3 from './banner3.png';
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import api from '../../API/api';



function Home() {

  const [produtos, setProducts] = useState([]);
  
  useEffect(() => {
    api
      .get("/readProduct")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.log("ops! ocorreu um erro" + err);
      });
  }, []);


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

        <div style={{display:"flex", justifyContent: 'left'}}>
          <h1 style={{paddingRight: '80%'}}>Produtos</h1>          
          
        </div>

        <ul className='containe'>
            {produtos.map((produtos) => {
              if(produtos.destaque == "sim"){
                return (
                    <div id='zoomout'>
                    <a href={`/detalhes/${produtos.uid}`} className='botaoGrande'>
                        <Card>
                            <Card.Img variant="top" src={produtos.imagem} height={'250px'} />
                            <Card.Body>
                                <Card.Title className='titulo'>{produtos.titulo}</Card.Title>
                                <Card.Text style={{ fontSize: "12px" }}>SKU: {produtos.codigo}</Card.Text>
                                <Card.Text>Por Apenas:</Card.Text>
                                <Card.Text className='valorproduto'>R${parseFloat(produtos.preco).toFixed(2)}</Card.Text>
                                <Button variant="primary" href={`/detalhes/${produtos.uid}`} id='zoomin' style={{ backgroundColor: '#9cac74', borderColor: '#9cac74', color: '#fff' }}>Comprar Agora</Button>
                            </Card.Body>
                        </Card>
                    </a>
                    </div>
                )
              }
            })}
        </ul>
        




        <br></br>
        <br></br>

      </div></>

  );

}

export default Home;