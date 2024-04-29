import { useEffect } from "react";
import { useState } from "react";
import Servicecard from "./Servicecard";



const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
         fetch('services.json')
         .then(res => res.json())
         .then(data => setServices(data))
    },[])
    console.log(services);
    return (
        <div className="mt-10">
            
          <div>
           <h3 className="text-3xl text-orange-400 text-center">Our services</h3>  
           <h2 className="text-5xl text-center">Our services area</h2>  
           <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde nobis ea odit voluptatum natus beatae. Repellendus mollitia amet libero.</p>
         </div>  
           <p className="text-6xl text-center">{services.length}</p>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
              {
                services.map(service => <Servicecard key={service._id}
                service={service}></Servicecard> )
              }
           </div>
        </div>
    );
};

export default Services;