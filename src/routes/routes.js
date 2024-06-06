import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import SegurancaPrivacidade from "../pages/SegurancaPrivacidade";
import Erro from "../pages/Erro";
import Produtos from "../pages/Produtos";
import Detalhes from "../pages/Detalhes";
import SignIn from "../pages/Login";
import Perfil from "../pages/Perfil";
import Carrinho from "../pages/Carrinho";
import Cadastro from "../pages/Cadastro";
import Admin from "../pages/Admin";
import CadastroProduto from "../pages/CadastroProduto";

import Private from './private';

function RoutesApp() {
  console.log("Rendering RoutesApp");
  
  return (
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/segurancaeprivacidade' element={<SegurancaPrivacidade />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/detalhes/:id' element={<Detalhes />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/admin' element={<Private><Admin /></Private>} />
        <Route path='/cadastro_produto/:id' element={<CadastroProduto />} />
        <Route path='/cadastro_produto' element={<CadastroProduto />} />
        
        <Route path='*' element={<Erro />} />
      </Routes>
    
  );
}

export default RoutesApp;