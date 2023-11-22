import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'


import Home from './pages/Home';
import Contato from './pages/Contato';
import Erro from './pages/Erro';
import SegurancaPrivacidade from './pages/SegurancaPrivacidade';
import Sobre from './pages/Sobre';
import Cadinho from './pages/cadinho';
import Algodao from './pages/Algodao';
import Almofariz from './pages/Almofariz';
import Bequer from './pages/Bequer';
import Bico from './pages/Bico';
import Condutivimetro from './pages/Condutivimetro';
import Densimetro from './pages/Densimetro';
import Exodo from './pages/Exodo';
import Funil from './pages/Funil';
import Rolha from './pages/Rolha';
import GarraAranha from './pages/GarraAranha';
import Garra from './pages/Garra';



function TypesExample() {
  return (
    
    
    <Router>
      
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/segurancaeprivacidade' element={<SegurancaPrivacidade/>}/>
        <Route path='/cadinho' element={<Cadinho/>}/>
        <Route path='/algodao' element={<Algodao/>}/>
        <Route path='/almofariz' element={<Almofariz/>}/>
        <Route path='/bequer' element={<Bequer/>}/>
        <Route path='/bico' element={<Bico/>}/>
        <Route path='/condutivimetro' element={<Condutivimetro/>}/>
        <Route path='/densimetro' element={<Densimetro/>}/>
        <Route path='/exodo' element={<Exodo/>}/>
        <Route path='/funil' element={<Funil/>}/>
        <Route path='/rolha' element={<Rolha/>}/>
        <Route path='/garra_aranha' element={<GarraAranha/>}/>
        <Route path='/garra' element={<Garra/>}/>
        <Route element={<Erro/>}/>


      </Routes>
      

    </Router>




  );
}

export default TypesExample;