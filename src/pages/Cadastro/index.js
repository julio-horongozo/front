import { useState } from 'react';
import './Cadastro.css';
import CadastroImage from './cadastro.png';
import { Image } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { AuthContext } from '../../context/auth';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../../API/api';
import Select from "react-select";
import { toast } from 'react-toastify';
var contador = 1

function Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const { signUp, loadingAuth } = useContext(AuthContext);
    const [municipios, setMunicipios] = useState([]);
    const [cidade , setCidade] = useState('')
    const [estados, setEstados] = useState([]);
    const [uf, setUf] = useState('');
    
    

    const navigate = useNavigate();
    

    async function handleSubmit(e) {
        e.preventDefault();

        if (nome !== '' && email !== '' && senha !== '' && uf !== 'selecione' && cidade !=='selecione' && uf !== '' && cidade !== '') {
            await signUp(email, senha, nome, uf, cidade)
            navigate('/login')
        }else{

            toast.error("Ocorreu um Erro!")
        }

    }

    useEffect(() => {
        api
          .get("/uf/v1")
          .then((response) => setEstados(response.data))
          .catch((err) => {
            console.log("ops! ocorreu um erro" + err);
          });
      }, []);

      if (uf && contador == 1){
        
        if(uf == "selecione"){
            console.log("Selecione")
        }else{
        
        var url = `/municipios/v1/${uf}`
        
        api
        .get(url)
        .then((response) => setMunicipios(response.data))
        .catch((err) => {
          console.log("ops! ocorreu um erro" + err);
        });
        contador--;
    }}
    
    

      const mudaEstado = (e) => {
        setUf(e.target.value)
        if (contador == 0){
        contador++
        }
    }
      
    return (

        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div className='container' style={{ backgroundColor: '#fff', height: '700px', marginBottom: '30px', display: 'inline-flex', justifyContent: 'left', padding: '0', color: '#3c4c63' }}>

                <Image src={CadastroImage} style={{ paddingRight: '30px' }} fluid className='imagem'></Image>

                <div className='formulario'>
                    <h1>Faça o Seu Cadastro</h1>
                    <Form.Label>Nome</Form.Label>
                    <br />
                    <input autoComplete='off' id='inp' onChange={(e) => setNome(e.target.value)}></input>
                    <p />
                    <Form.Label>E-mail</Form.Label>
                    <br />
                    <input autoComplete='off' id='inp' onChange={(e) => setEmail(e.target.value)}></input>
                    <p />
                    <Form.Label>Senha</Form.Label>
                    <br />
                    <input autoComplete='off' id='inp' onChange={(e) => setSenha(e.target.value)} type='password'></input>
                    <p />
                    
                    <p />
                    <Form.Label>Estado</Form.Label>
                    <br />
                    <select id='inp' name='estade' style={{width: "100%"}} placeholder='Selecione um Estado' onChange={mudaEstado}>
                            <option value={"selecione"}>Selecione um Estado</option>
                        {estados.map((estado, index) => {
                            return(<option key={'estade' + index} value={estado.sigla}>{estado.nome}</option>);
                        })}

                    </select>
                    <p />
                    <Form.Label>Cidade</Form.Label>
                    <br />
                    <select id='inp' name='city' style={{width: "100%"}} placeholder='Selecione uma Cidade' onChange={(e) => setCidade(e.target.value)}>
                            <option value={"selecione"}>Selecione uma Cidade</option>
                        {municipios.map((cidade, index) => {
                            return(<option key={'city' + index} value={cidade.sigla}>{cidade.nome}</option>);
                        })}

                    </select>
                    <p></p>
                    <button id='entrar' onClick={handleSubmit}>Cadastrar-se</button>
                    

                    
                    

                    


            </div>


        </div>
        </div >


    );


}

export default Cadastro;