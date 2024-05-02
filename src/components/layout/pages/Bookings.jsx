import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/Authprovider";
import Bookingtable from "./Bookingtable";



const Bookings = () => {
    const {user} = useContext(AuthContext)
    const [bookings,setBookings] = useState([])
   
    const url = `http://localhost:5007/bookings?emails=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])
    
    return (
        <div>
            <h2 className="text-5xl">Your bookings: {bookings.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      {
        bookings.map(booking=> <Bookingtable key={booking._id} booking={booking}></Bookingtable>)
      }
       
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Bookings;
