import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase";
import axios from "axios";


export const AuthContext = createContext();
const auth = getAuth(app)

const Authprovider = ({children}) => {

  
  const [user, setUser] = useState(null)  
  const [loading, setLoading] = useState(true)
  const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logout = ()=>{
    setLoading(true)
    return signOut(auth)
}
 
 useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
          setUser(currentUser)
          setLoading(false)
          if(currentUser){
            const loggedUser = {email : currentUser.email}
            axios.post('http://localhost:5007/jwt',loggedUser, {withCredentials: true})
            .then(res => {
                 console.log('token access',res.data);
            })
          }
         
      })
      return () =>{
         return unsubscribe()
      }
 },[])

  const authinfo = {
      user,
      loading,
      createUser,
      signIn,
      logout
  }


    return (
        <AuthContext.Provider value = {authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;