import './Admin.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import api from '../../API/api';


function Admin() {
    const [produtos, setProducts] = useState([]);

    useEffect(() => {
        api
            .get("/readProduct")
            .then((response) => setProducts(response.data))
            .catch((err) => {
                console.log("ops! ocorreu um erro" + err);
            });
    }, []);

    async function excluirPost(id) {
        
        api.delete(`/deleteProduct/${id}`, id)
        .then(response => {

            console.log("resposta do servidor:", response.data)
            toast.success("Produto Excluido com sucesso!");
            setTimeout(() => {
                window.location.reload(false);
              }, 1500);
            

        })
        .catch(error => {

            console.error('Erro ao enviar dados para o servidor:', error);

        })
    }



    return (


        <div className='container' style={{ backgroundColor: "#fff", justifyContent: "center", display: "flex", flexDirection: 'column', marginBottom: "40px" }}>
            <h1 style={{ color: "#3c4c63", textAlign: "center", padding: "50px" }}>PRODUTOS CADASTRADOS</h1>
            <table>
                <thead style={{ padding: "30px" }}>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Preço</th>
                        <th scope="col"></th>
                    </tr>
                </thead>


                <tbody>
                    {produtos.map((produtos) => {
                        return (



                            <tr key={produtos}>
                                <td data-label="Código">{produtos.codigo}</td>
                                <td data-label="Descrição">{produtos.titulo}</td>
                                <td data-label="Preço">R${parseFloat(produtos.preco).toFixed(2)}</td>
                                <td ><Button id='entrar' href={`/cadastro_produto/${produtos.uid}`}>Editar Produto</Button></td>
                                <td ><button id='entrar' onClick={() => excluirPost(produtos.uid)}>Excluir Produto</button></td>
                            </tr>





                        );
                    })}
                </tbody>
            </table>

            <Button id='entrar1' style={{ marginTop: "40px", marginBottom: "15px" }} href="/cadastro_produto">Adicionar Produto</Button>

        </div>





    );


}

export default Admin;