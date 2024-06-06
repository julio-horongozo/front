import { useState } from 'react';

import { Image } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Title from '../../components/Title';
import { isEmpty } from 'lodash';
import { toast } from 'react-toastify';
import api from '../../API/api';

function CadastroProduto() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [nomeProduto, setNomeProduto] = useState('');
  const [codigoProduto, setCodigoProduto] = useState('');
  const [destaqueProduto, setDestaqueProduto] = useState('');
  const [detalhesProduto, setDetalhesProduto] = useState('');
  const [imagemProduto, setImagemProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState();

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

  

  async function handleSubmit(e) {

    if (id) {

      if (isEmpty(codigoProduto)) {

        toast.error("Sem Código Informado!")

      } else if (isEmpty(nomeProduto)) {

        toast.error("Sem Nome do Produto Informado!")

      } else if (isEmpty(detalhesProduto)) {

        toast.error("Sem Detalhes Informados!")

      } else if (isEmpty(imagemProduto)) {

        toast.error("Sem URL Informada!")

      } else if (isEmpty(precoProduto)) {

        toast.error("Sem Preço Informado!")

      } else if (isEmpty(destaqueProduto)) {

        toast.error("Informe se o produto é destaque ou não!")

      } else {
        api.put(`/updateProduct/${id}`, {
          codigo: codigoProduto,
          titulo: nomeProduto,
          detalhes: detalhesProduto,
          imagem: imagemProduto,
          preco: precoProduto,
          destaque: destaqueProduto
        })
          .then(response => {
            console.log(response.data)
            toast.success("Produto Alterado com Sucesso!")
          })
          .catch(error => {
            console.error(error);
          });

          navigate('/admin')
  
      }      
    } else {

      if (isEmpty(codigoProduto)) {

        toast.error("Sem Código Informado!")

      } else if (isEmpty(nomeProduto)) {

        toast.error("Sem Nome do Produto Informado!")

      } else if (isEmpty(detalhesProduto)) {

        toast.error("Sem Detalhes Informados!")

      } else if (isEmpty(imagemProduto)) {

        toast.error("Sem URL Informada!")

      } else if (isEmpty(precoProduto)) {

        toast.error("Sem Preço Informado!")

      } else if (isEmpty(destaqueProduto)) {

        toast.error("Informe se o produto é destaque ou não!")

      } else {
        
        api.post('/createProduct', {
          codigo: codigoProduto,
          titulo: nomeProduto,
          detalhes: detalhesProduto,
          imagem: imagemProduto,
          preco: precoProduto,
          destaque: destaqueProduto
        })
          .then(response => {
            console.log(response.data)
            toast.success("Produto Criado com Sucesso!")
          })
          .catch(error => {
            console.error(error);
          });

          navigate('/admin')

      }

    }

    

  }

  return (

    <div style={{ justifyContent: 'center', display: 'flex', height: "850px"}}>
      <div className='container' style={{ backgroundColor: '#fff', height: '800px', marginBottom: '30px', display: 'inline-flex', justifyContent: 'left', padding: '0', color: '#3c4c63' }}>

        <Image style={{ paddingRight: '30px' }} fluid className='imagem'></Image>

        <div className='formulario'>
          <Title name={id ? "Editar Produto" : "Novo Produto"}></Title>
          <Form.Label>SKU</Form.Label>
          <br />
          <input autoComplete='off' id='inp' onChange={(e) => setCodigoProduto(e.target.value)} value={codigoProduto}></input>

          <p />
          <Form.Label>Nome do Produto</Form.Label>
          <br />
          <input autoComplete='off' id='inp' onChange={(e) => setNomeProduto(e.target.value)} value={nomeProduto}></input>
          <p />
          <Form.Label>Detalhes</Form.Label>
          <br />
          <textarea autoComplete='off' id='inp' onChange={(e) => setDetalhesProduto(e.target.value)} value={detalhesProduto} style={{height: "150px", resize: "none"}}></textarea>
          <p />
          <Form.Label>URL Imagem</Form.Label>
          <br />
          <input autoComplete='off' id='inp' onChange={(e) => setImagemProduto(e.target.value)} value={imagemProduto}></input>
          <p />
          <Form.Label>Preço</Form.Label>
          <br />
          <span>Digite números com "." EX: "99.99"</span>
          <br />
          <input autoComplete='off' id='inp' onChange={(e) => setPrecoProduto(e.target.value)} value={precoProduto}></input>
          <p />
          <Form.Label>Destaque</Form.Label>
          <br />
          <select id='inp' value={destaqueProduto} onChange={(e) => setDestaqueProduto(e.target.value)}>
            <option value=""></option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
          <p />

          <button id='entrar' onClick={handleSubmit}>Registrar</button>



        </div>


      </div>
    </div>


  );


}

export default CadastroProduto;