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




// import { createContext, useEffect, useState } from "react";
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import app from "../firebase/firebase.config";
// import axios from "axios";

// export const AuthContext = createContext();
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//     const signIn = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     }

//     const logOut = () => {
//         setLoading(true);
//         return signOut(auth);
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             const userEmail = currentUser?.email || user?.email;
//             const loggedUser = { email: userEmail };
//             setUser(currentUser);
//             console.log('current user', currentUser);
//             setLoading(false);
//             // if user exists then issue a token
//             if (currentUser) {
//                 axios.post('https://car-doctor-server-topaz-one.vercel.app/jwt', loggedUser, { withCredentials: true })
//                     .then(res => {
//                         console.log('token response', res.data);
//                     })
//             }
//             else {
//                 axios.post('https://car-doctor-server-topaz-one.vercel.app/logout', loggedUser, {
//                     withCredentials: true
//                 })
//                     .then(res => {
//                         console.log(res.data);
//                     })
//             }
//         });
//         return () => {
//             return unsubscribe();
//         }
//     }, [])

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         signIn,
//         logOut
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;