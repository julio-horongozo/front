import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import Trator from './trator.png';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/auth.js';
import api from '../../API/api.js';
import { toast } from 'react-toastify';


export default function SignIn(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loadingAuth } = useContext(AuthContext);

  async function handleSignIn(e){
    e.preventDefault();

    try {
      const response = await api.post('/login', {
        email: email,
        password: password
      });
      signIn(response.data)
    } catch (error) {
      toast.error('Usuário/Senha não Localizado!');
    }
  }

    return(
        
        <div style={{justifyContent: 'center', display: 'flex'}}>
        <div className='container' style={{backgroundColor: '#fff', height: '700px', marginBottom: '30px', display: 'inline-flex', justifyContent: 'left', padding: '0', color: '#3c4c63'}}>

            <Image src={Trator} style={{paddingRight: '30px'}} fluid className='imagem'></Image>

                <div className='formulario'>
                <h1>Faça o Seu Log-in</h1>
                <p/>
                <Form.Label value={email}>E-mail</Form.Label>
                <br/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} id='inp'/>
                <p/>
                <Form.Label value={password}>Senha</Form.Label>
                <br/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} id='inp' type='password'/>

                <p/>
                <button onClick={handleSignIn} id='entrar'>{loadingAuth ? "Carregando..." : "Fazer Log-in"}</button>
        
                <p/>
                <Form.Text style={{color: '#3c4c63'}}>
                <Button id='minimalista' href='/cadastro'>É novo por aqui?  Crie Sua Conta Agora</Button>
                </Form.Text>
                
                </div>

        </div>
        </div>        

    );


}