import { useEffect, useState } from "react";



const useServices = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
         fetch('https://module58-2.vercel.app/services')
         .then(res => res.json())
         .then(data => setServices(data))
    },[])

    return (
        services
    );
};

export default useServices;



// import { useEffect, useState } from "react";


// const useServices = () => {
//     const [services, setServices] = useState([]);

//     useEffect(() => {
//         fetch('https://car-doctor-server-topaz-one.vercel.app/services')
//             .then(res => res.json())
//             .then(data => setServices(data))
//     }, [])

//     return services;
// };

// export default useServices;