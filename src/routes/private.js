import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import { toast } from 'react-toastify';

export default function Private({ children }){
  const { user, signed, loading } = useContext(AuthContext);

  if(loading){
    return(
      <div></div>
    )
  }
  
  
  if(!signed){ 
    toast.error("Você não tem Acesso a Essa Página!")
    return  <Navigate to="/" />    
  }

  if(user.uid != "vNxny5ntzWYtUAhKFfHBlsGb1KT2"){ 
    toast.error("Você não tem Acesso a Essa Página!")
    return  <Navigate to="/" />
  }

  

  return children;

}
