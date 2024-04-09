import { useState, createContext, useEffect } from 'react';
import { auth, db } from '../services/firebaseConnection';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'

import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();


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


  async function signIn(email, password){
    setLoadingAuth(true);

    await signInWithEmailAndPassword(auth, email, password)
    .then( async (value) => {
      let uid = value.user.uid;

      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef)

      let data = {
        uid: uid,
        nome: docSnap.data().nome,
        email: value.user.email,
        uf: docSnap.data().uf,
        cidade: docSnap.data().cidade,

      }

      setUser(data);
      storageUser(data);
      setLoadingAuth(false);
      toast.success("Você Fez o Log-in")
      navigate("/perfil")
    })
    .catch((error) => {
      console.log(error);
      setLoadingAuth(false);
      toast.error("Ocorreu um Erro")
      
    }) 

  }


  // Cadastrar um novo user
  async function signUp(email, password, name, uf, cidade){
    setLoadingAuth(true);

    await createUserWithEmailAndPassword(auth, email, password, uf, cidade)
    .then( async (value) => {
        let uid = value.user.uid

        await setDoc(doc(db, "users", uid), {
          nome: name,
          uf: uf,
          cidade: cidade,
        })
        .then( () => {

          let data = {
            uid: uid,
            nome: name,
            email: value.user.email,
            uf: uf,
            cidade: cidade,
            
          };

          setUser(data);
          storageUser(data);
          setLoadingAuth(false);
          navigate("/perfil")
          
        })


    })
    .catch((error) => {
      console.log(error);
      setLoadingAuth(false);
    })

  }


  function storageUser(data){
    localStorage.setItem('@ticketsPRO', JSON.stringify(data))
  }

  async function logout(){
    await signOut(auth);
    localStorage.removeItem('@ticketsPRO');
    setUser(null);
    navigate("/")
  }

  

  return(
    <AuthContext.Provider 
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
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