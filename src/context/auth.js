import { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const AuthContext = createContext({
  updateUser: () => {}
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  function updateUser(nome) {
    const storedData = localStorage.getItem('@ticketsPRO');

    if (storedData) {
      const userData = JSON.parse(storedData);
      userData.nome = nome;
      localStorage.setItem('@ticketsPRO', JSON.stringify(userData));
    } else {
      console.error('Nenhum dado encontrado no armazenamento local.'); 
    }

  };
  
  

  useEffect(() => {
    async function loadUser(){
      const storageUser = localStorage.getItem('@ticketsPRO')

      if(storageUser){
        setUser(JSON.parse(storageUser))
        setLoading(false);
      }


      setLoading(false);

    }

    loadUser();
  }, [])


  async function signIn(data){

      setUser(data);
      storageUser(data);      

      toast.success("Você Fez o Log-in")
      navigate("/perfil")
      
    }


  function storageUser(data){
    localStorage.setItem('@ticketsPRO', JSON.stringify(data))
  }

  async function logout(){
    localStorage.removeItem('@ticketsPRO');
    setUser(null);
    navigate("/")
  }

  return(
    <AuthContext.Provider 
      value={{
        signed: !!user,
        user,
        updateUser,
        signIn,
        logout,
        loadingAuth,
        loading,
        storageUser,
        setUser         
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;