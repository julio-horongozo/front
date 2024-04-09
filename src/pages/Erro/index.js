import './Erro.css'
import erro from './Design sem nome.png';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

function Erro() {
  return (
    <div className='img'>
      <Image src={erro} fluid />
    </div>
  );
}

export default Erro;