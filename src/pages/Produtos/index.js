import './Produtos.css';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import { Form } from 'react-bootstrap';



function Produtos() {
    const [produtos, setProducts] = useState([]);
    const [pesquisa, setPesquisa] = useState([]);
    useEffect(() => {
        async function loadProducts() {
            const unsub = onSnapshot(collection(db, "produtos"), (snapshot) => {
                let listaProdutos = [];

                snapshot.forEach((doc) => {
                    listaProdutos.push({
                        id: doc.id,
                        codigo: doc.data().codigo,
                        titulo: doc.data().titulo,
                        destaque: doc.data().destaque,
                        detalhes: doc.data().detalhes,
                        imagem: doc.data().imagem,
                        preco: doc.data().preco,
                    })
                })

                setProducts(listaProdutos);
            })
        }

        loadProducts();

    }, [])

    return (


        <div>
            <div style={{width: '50%', margin:'auto'}}>
            <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Pesquisar"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setPesquisa(e.target.value)}
            />
          </Form>
          </div>
        <ul className='containe'>
            {produtos.map((produtos) => {
                if(produtos.titulo.indexOf(pesquisa) != -1){
                return (                    
                    <div id='zoomout'>
                    <a href={`/detalhes/${produtos.id}`} className='botaoGrande'>
                        <Card>
                            <Card.Img variant="top" src={produtos.imagem} height={'250px'} />
                            <Card.Body>
                                <Card.Title className='titulo'>{produtos.titulo}</Card.Title>
                                <Card.Text style={{ fontSize: "12px" }}>SKU: {produtos.codigo}</Card.Text>
                                <Card.Text>Por Apenas:</Card.Text>
                                <Card.Text className='valorproduto'>R${parseFloat(produtos.preco).toFixed(2)}</Card.Text>
                                <Button variant="primary" href={`/detalhes/${produtos.id}`} id='zoomin' style={{ backgroundColor: '#9cac74', borderColor: '#9cac74', color: '#fff' }}>Comprar Agora</Button>
                            </Card.Body>
                        </Card>
                    </a>
                    </div>
                )
            }})}
        </ul>
        </div>





    );


}

export default Produtos;