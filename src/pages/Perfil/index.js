import './Perfil.css';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/auth.js';
import Uva from './uva.png';
import { toast } from 'react-toastify';
import api from '../../API/api.js';

export default function Perfil() {
  const { user, logout, updateUser } = useContext(AuthContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');

  useEffect(() => {
    if (user) {
      setNome(user.nome || '');
      setEmail(user.email || '');
      setUf(user.uf || '');
      setCidade(user.cidade || '');
    }
  }, [user]);

  console.log(user)

  async function handleSubmit(e) {
    e.preventDefault(); // Previne o comportamento padrão de submissão do formulário
    try {
      const response = await api.put(`/alterarUser/${user.uid}`, {
        nome: nome
      });
      // Supondo que o servidor responda com os dados atualizados do usuário
      const updatedUser = response.data;
      console.log(updatedUser)
      console.log(user)
      updateUser(nome)
       // Atualiza os dados locais do usuário
      toast.success("Perfil Alterado com Sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao atualizar perfil. Por favor, tente novamente.");
    }
  }

  const sair = () => {
    toast.success("Você saiu do Perfil!");
    logout();
  }

  return (
    <div style={{ justifyContent: 'center', display: 'flex' }}>
      <div className='container' style={{ backgroundColor: '#fff', height: '700px', marginBottom: '30px', display: 'inline-flex', justifyContent: 'left', padding: '0', color: '#3c4c63' }}>
        <Image src={Uva} style={{ paddingRight: '30px' }} fluid className='imagem'></Image>
        <div className='formulario'>
          <h1>Informações pessoais</h1>
          <p />
          <Form.Label>E-mail</Form.Label>
          <br />
          <input value={email} id='inp' readOnly />
          <p />
          <Form.Label>Nome</Form.Label>
          <br />
          <input value={nome} onChange={(e) => setNome(e.target.value)} id='inp' />
          <p />
          <Form.Label>Estado</Form.Label>
          <br />
          <input value={uf} onChange={(e) => setUf(e.target.value)} id='inp' readOnly />
          <p />
          <Form.Label>Cidade</Form.Label>
          <br />
          <input value={cidade} onChange={(e) => setCidade(e.target.value)} id='inp' readOnly />
          <p />
          <button id='entrar' onClick={handleSubmit}>Salvar alterações</button>
          <p />
          <button id='entrar' onClick={sair}>Sair</button>
        </div>
      </div>
    </div>
  );
}
