import './Perfil.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/auth.js';
import Uva from './uva.png';

import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection.js';
import { toast } from 'react-toastify'





export default function Perfil(){

  const { user, logout } = useContext(AuthContext);

  const [nome, setNome] = useState(user.nome)
  const [email, setEmail] = useState(user.email)
  const [uf, setUf] = useState(user.uf)
  const [cidade, setCidade] = useState(user.cidade)
  

  async function handleSubmit(e) {

    const docRef = doc(db, "users", user.uid)
    
    await updateDoc(docRef, {
      nome: nome,
    })
    .then(() => {
      toast.success("Perfil Atualizado com Sucesso")
    })
    .catch((error) => {
      console.log(error)
    })

  }


  const sair = () => {
    
    toast.success("Você saiu do Perfil!")

    logout()



  }

    return(
        
        <div style={{justifyContent: 'center', display: 'flex'}}>
        <div className='container' style={{backgroundColor: '#fff', height: '700px', marginBottom: '30px', display: 'inline-flex', justifyContent: 'left', padding: '0', color: '#3c4c63'}}>

            <Image src={Uva} style={{paddingRight: '30px'}} fluid className='imagem'></Image>

                <div className='formulario'>
                <h1>Informações pessoais</h1>
                <p/>
                <Form.Label value={email}>E-mail</Form.Label>
                <br/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} id='inp' readOnly/>
                <p/>
                <Form.Label value={nome}>Nome</Form.Label>
                <br/>
                <input value={nome} onChange={(e) => setNome(e.target.value)} id='inp' />
                
                <p/>
                <Form.Label value={nome}>Estado</Form.Label>
                <br/>
                <input value={uf}  id='inp' readOnly/>
                <p/>
                <Form.Label value={nome}>Nome</Form.Label>
                <br/>
                <input value={cidade} id='inp' readOnly/>
                <p/>
                <button id='entrar' onClick={handleSubmit}>Salvar alterações</button>
                <p/>
                <button id='entrar' onClick={sair}>Sair</button>
        
                
                
                </div>

        </div>
        </div>        

    );


}
