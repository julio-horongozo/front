import './Carrinho.css';
import { useEffect, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/auth.js';
import { Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import api from '../../API/api.js';

function Carrinho() {

    const [produtos, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const { user } = useContext(AuthContext);
    const [quantidade, setQuantidade] = useState();


    useEffect(() => {
        api
            .get("/readProduct")
            .then((response) => setProducts(response.data))
            .catch((err) => {
                console.log("ops! ocorreu um erro" + err);
            });
    }, []);

    useEffect(() => {
        api
            .get("/readCart")
            .then((response) => setCart(response.data))
            .catch((err) => {
                console.log("ops! ocorreu um erro" + err);
            });
    }, []);

    var soma = 0;

    const handleChangeQuantidade = (e) => {

        setQuantidade(e.target.value);

    }


    async function mais(item) {

        var quantidade_var = parseFloat(item.quantidade)
        quantidade_var = quantidade_var + 1;

        api.put(`/updateCarrinho/${item.uid}`, {
            quantidade: quantidade_var
        })
            .then(response => {
                toast.success("Produto Alterado com Sucesso!")
                window.location.reload(false);
            })
            .catch(error => {
                console.error(error);
            });

    }

    async function menos(item) {
        if (item.quantidade == 1) {

            console.log("Quantidade igual a 1!")

        } else {

            var quantidade_var = parseFloat(item.quantidade)
            quantidade_var = quantidade_var - 1;


            api.put(`/updateCarrinho/${item.uid}`, {
                quantidade: quantidade_var
            })
                .then(response => {
                    toast.success("Produto Alterado com Sucesso!")
                    window.location.reload(false);
                })
                .catch(error => {
                    console.error(error);
                });

        }
    }

    async function excluirPost(id) {
        api.delete(`/deleteCarrinho/${id}`, id)
            .then(response => {
                toast.success("Produto Excluido com sucesso!");
                window.location.reload(false);
            })
            .catch(error => {

                console.error('Erro ao enviar dados para o servidor:', error);

            })
    }

    return (


        <div className='container' style={{ backgroundColor: "#fff", justifyContent: "center", display: "flex", flexDirection: 'column', marginBottom: "40px" }}>
            <h1 style={{ color: "#3c4c63", textAlign: "center", padding: "50px" }}>CARRINHO</h1>
            <table>
                <thead style={{ padding: "30px" }}>
                    <tr>
                        <th scope="col">Descrição</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>

                <tbody>

                    {cart.map((carrinho) => {
                        if (carrinho.nome == user.uid)
                            return (
                                <tr key={carrinho}>

                                    {produtos.map((produto) => {

                                        if (carrinho.produto == produto.uid) {
                                            return <td data-label="Descrição">{produto.titulo}</td>
                                        }
                                    })}

                                    <td data-label="Preço">R${parseFloat(carrinho.preco).toFixed(2)}</td>

                                    <td data-label="Quantidade"><Form.Group controlId='quantidade'>
                                        <InputGroup className="mb-3" style={{ width: "70%" }}>
                                            <Button type='submit' id='zoomout' style={{ backgroundColor: '#9cac74', borderColor: '#9cac74', width: '30%' }} onClick={(e) => { menos(carrinho) }}>-</Button>
                                            <Form.Control
                                                readOnly
                                                style={{ textAlign: 'center', width: '40px' }}
                                                inputMode='numeric'
                                                value={carrinho.quantidade}
                                                onChange={handleChangeQuantidade}
                                            />
                                            <Button type='submit' id='zoomout' style={{ backgroundColor: '#9cac74', borderColor: '#9cac74', width: '30%' }} onClick={(e) => { mais(carrinho) }}>+</Button>
                                        </InputGroup>

                                    </Form.Group></td>
                                    <td data-label="Total" className='total'>R${(parseFloat(carrinho.quantidade) * parseFloat(carrinho.preco)).toFixed(2)}</td>
                                    <p style={{ display: 'none' }}>{soma = (parseFloat(carrinho.preco) * carrinho.quantidade) + soma}</p>
                                    <td ><button id='entrar' onClick={() => excluirPost(carrinho.uid)}>Excluir Produto</button></td>
                                </tr>





                            );
                    })}
                </tbody>



            </table>

            <div style={{ display: "flex", justifyContent: 'right' }}>

                <h3 style={{ paddingRight: '6%', paddingTop: '5%' }}>Total: R${soma.toFixed(2)}</h3>

            </div>
            <Button id='entrar1' style={{ marginTop: "40px", marginBottom: "15px" }} onClick={(e) => { toast.error("Função não Disponível") }}>Finalizar Compra</Button>

        </div>





    );

}

export default Carrinho;