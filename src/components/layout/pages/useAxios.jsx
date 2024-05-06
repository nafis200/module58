
import axios from "axios";
import { useEffect } from "react";
import useAuth from "../useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
     baseURL: 'https://module58-2.vercel.app',
     withCredentials: true
})

const useAxios = () => {
    const {logout} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
       axiosSecure.interceptors.response.use( res =>{
         return res;
       }, error=>{
           console.log('error tracked in the interceptor', error.response) 
           if(error.response.status === 401 || error.response.status === 403){
            console.log('log out the user');
            logout()
            .then(()=>{
                 console.log('logout');
                 navigate('/login')
            })
            .catch(error => console.log(error))
           }
          
       }
    )
    },[])
    return (
        axiosSecure
    );
};

export default useAxios;






// import axios from "axios";
// import { useEffect } from "react";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";


// const axiosSecure = axios.create({
//     baseURL: 'https://car-doctor-server-topaz-one.vercel.app',
//     withCredentials: true
// });

// const useAxiosSecure = () => {
//     const { logOut } = useAuth();
//     const navigate = useNavigate();
//     useEffect(() => {
//         axiosSecure.interceptors.response.use(res => {
//             return res;
//         }, error => {
//             console.log('error tracked in the interceptor', error.response)
//             if (error.response.status === 401 || error.response.status === 403) {
//                 console.log('logout the user')
//                 logOut()
//                     .then(() => { 
//                         navigate('/login')
//                     })
//                     .catch(error => console.log(error))
//             }
//         })
//     }, [])

//     return axiosSecure;
// };