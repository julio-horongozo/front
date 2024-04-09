import './Admin.css';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import { doc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';



function Admin() {
    const [produtos, setProducts] = useState([]);

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


    async function excluirPost(id){
        const docRef = doc(db, "produtos", id)
        await deleteDoc(docRef)
        .then(() =>{
            toast.success("Produto Excluido!")
        })
    
      }

    

    return (


        <div className='container' style={{backgroundColor: "#fff", justifyContent: "center", display:"flex", flexDirection: 'column', marginBottom: "40px"}}>
            <h1 style={{color: "#3c4c63", textAlign: "center", padding: "50px"}}>PRODUTOS CADASTRADOS</h1>
            <table>
                <thead style={{padding: "30px"}}>
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
                                <td ><Button id='entrar' href={`/cadastro_produto/${produtos.id}`}>Editar Produto</Button></td>
                                <td ><button id='entrar' onClick={() => excluirPost(produtos.id)}>Excluir Produto</button></td>
                            </tr>
                        




                );
            })}
        </tbody>
        </table>

            <Button id='entrar1' style={{marginTop: "40px", marginBottom: "15px"}} href="/cadastro_produto">Adicionar Produto</Button>

        </div>





    );


}

export default Admin;