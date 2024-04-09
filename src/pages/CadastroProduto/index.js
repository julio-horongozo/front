import { useState } from 'react';


import { Image } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { AuthContext } from '../../context/auth';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { getDocs, collection, doc, getDoc, updateDoc, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import Title from '../../components/Title';
import { isEmpty } from 'lodash';
import { toast } from 'react-toastify';



const listRef = collection(db, "produtos");

function CadastroProduto() {

    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha] = useState('');

    const { signUp, loadingAuth } = useContext(AuthContext);

    const { id } = useParams();
    const navigate = useNavigate();
    const [ quantidade, setQuantidade] = useState(1);
    const [ nomeProduto , setNomeProduto ] = useState('');
    const [ codigoProduto , setCodigoProduto ] = useState('');
    const [ destaqueProduto , setDestaqueProduto ] = useState('');
    const [ detalhesProduto , setDetalhesProduto ] = useState('');
    const [ imagemProduto , setImagemProduto ] = useState('');
    const [ precoProduto , setprecoProduto ] = useState();
    
        
    

    useEffect(() => {
      async function loadCustomers(){
        const querySnapshot = await getDocs(listRef)
        .then( (snapshot) => {
          let lista = [];
  
          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              titulo: doc.data().titulo,
            })
          })
            
          if(id){
            loadId(lista);
          }
  
        })
        .catch((error) => {
          console.log("ERRRO AO BUSCAR OS CLIENTES", error)
          })
      }
  
      loadCustomers();    
    }, [id])


    async function loadId(lista){
      const docRef = doc(db, "produtos", id);
      await getDoc(docRef)
      .then((snapshot) => {
        setNomeProduto(snapshot.data().titulo)
        setCodigoProduto(snapshot.data().codigo)
        setDestaqueProduto(snapshot.data().destaque)
        setDetalhesProduto(snapshot.data().detalhes)
        setImagemProduto(snapshot.data().imagem)
        setprecoProduto(snapshot.data().preco)  

        
      })
      .catch((error) => {
        console.log(error);
      })
    }

    async function handleSubmit(e){
        
        if (id) {

          
            const docRef = doc(db, "produtos", id)
            
            await updateDoc(docRef, {
              titulo: nomeProduto,
              codigo: codigoProduto,
              destaque: destaqueProduto,
              detalhes: detalhesProduto,
              imagem: imagemProduto,
              preco: parseFloat(precoProduto),
            })
            .then(() => {
              toast.success("Registro Feito com Sucesso!")
            })
            .catch((error) => {
              console.error("Ocorreu algum Erro!")
            })
        
        
          

        }else{

          if(isEmpty(codigoProduto)) {

            toast.error("Sem Código Informado!")
      
          }else if(isEmpty(nomeProduto)){
      
            toast.error("Sem Nome do Produto Informado!")
      
          }else if (isEmpty(detalhesProduto)) {
      
            toast.error("Sem Detalhes Informados!")
      
          }else if (isEmpty(imagemProduto)) {
      
            toast.error("Sem URL Informada!")
      
          }else if (isEmpty(precoProduto)) {

            toast.error("Sem Preço Informado!")

          }else if(isEmpty(destaqueProduto)){

            toast.error("Informe se o produto é destaque ou não!")

          }else{
            await addDoc(collection(db, "produtos"), {
              titulo: nomeProduto,
              codigo: codigoProduto,
              destaque: destaqueProduto,
              detalhes: detalhesProduto,
              imagem: imagemProduto,
              preco: precoProduto,
            })
            .then(() => {
              toast.success("Produto Cadastrado com Sucesso")
            })
            .catch((error) => {
              console.log("ERRO " + error)
            })
        
        
          }

          }

        
        navigate('/admin')
        
    
      }


    return (        

        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div className='container' style={{ backgroundColor: '#fff', height: '700px', marginBottom: '30px', display: 'inline-flex', justifyContent: 'left', padding: '0', color: '#3c4c63' }}>

                <Image style={{ paddingRight: '30px' }} fluid className='imagem'></Image>

                <div className='formulario'>
                <Title name={id ? "Editar Produto" : "Novo Produto"}></Title>
                <Form.Label>SKU</Form.Label>
                <br/>
                <input autoComplete='off' id='inp' onChange={(e) => setCodigoProduto(e.target.value)} value={codigoProduto}></input>
                
                <p/>
                <Form.Label>Nome do Produto</Form.Label>
                <br/>
                <input autoComplete='off' id='inp' onChange={(e) => setNomeProduto(e.target.value)} value={nomeProduto}></input>
                <p/>
                <Form.Label>Detalhes</Form.Label>
                <br/>
                <textarea autoComplete='off' id='inp' onChange={(e) => setDetalhesProduto(e.target.value)} value={detalhesProduto}></textarea>
                <p/>
                <Form.Label>URL Imagem</Form.Label>
                <br/>
                <input autoComplete='off' id='inp' onChange={(e) => setImagemProduto(e.target.value)} value={imagemProduto}></input>
                <p/>
                <Form.Label>Preço</Form.Label>
                <br/>
                <span>Digite números com "." EX: "99.99"</span>                
                <br/>
                <input autoComplete='off' id='inp' onChange={(e) => setprecoProduto(e.target.value)} value={precoProduto}></input>
                <p/>
                <Form.Label>Destaque</Form.Label>
                <br/>
                <select id='inp' value={destaqueProduto} onChange={(e) => setDestaqueProduto(e.target.value)}>
                  <option value=""></option>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>
                <p/>

                <button id='entrar' onClick={handleSubmit}>Registrar</button>



                </div>


            </div>
        </div>


    );


}

export default CadastroProduto;