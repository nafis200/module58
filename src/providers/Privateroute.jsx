import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate } from "react-router";



const Privateroute = ({children}) => {
    const{user,loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner text-error text-center flex items-center text-5xl"></span>
    }
    if(user?.email){
        return children;
    }
    return (
        <Navigate to="/login"></Navigate>
    );
};

export default Privateroute;