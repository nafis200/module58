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
          
          const userEmail = currentUser?.email || user?.email;
          const loggedUser = {email :  userEmail}
          setUser(currentUser)
          setLoading(false)
          if(currentUser){
            
            axios.post('https://module58-2.vercel.app/jwt',loggedUser, {withCredentials: true})
            .then(res => {
                 console.log('token access',res.data);
            })
          }
          else{
             axios.post('https://module58-2.vercel.app/logout',loggedUser,{withCredentials:true})
             .thrn(res =>{
                 console.log(res.data);
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