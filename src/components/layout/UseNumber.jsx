import { useEffect, useState } from "react";
import axios from "axios";


const UseNumber = () => {
    const [number,setNumber] = useState(0)
    useEffect(()=>{
         axios.get()
         .then(res =>{
            setNumber(res.data)
         })
    },[])
    return (
        number
    );
};

export default UseNumber;