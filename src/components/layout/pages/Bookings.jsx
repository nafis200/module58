import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/Authprovider";
import Bookingtable from "./Bookingtable";
import axios from "axios";
import useAxios from "./useAxios";



const Bookings = () => {
    const {user} = useContext(AuthContext)
    const [bookings,setBookings] = useState([])
    const axiosSecure = useAxios()
   
    // const url = `http://localhost:5007/bookings?email=${user?.email}`
    const url = `/bookings?email=${user?.email}`
    useEffect(()=>{
        // fetch(url,{credentials:'include'})
        // .then(res => res.json())
        // .then(data => setBookings(data))
        // axios.get(url,{withCredentials: true})
        // .then(res =>{
        //      setBookings(res.data)
        // })
        axiosSecure.get(url)
        .then(res => setBookings(res.data))
    },[url,axiosSecure])

    const handleDelete = id =>{
        // fetch(`http:///bookings/${id}`,{
        //     method:'DELETE',
        // })
        // .then(res => res.json())
        // .then(data => {
        //     const remaining = bookings.filter(booking=> booking._id !== id)
        //     setBookings(remaining)
        // })

        axiosSecure.delete(`/bookings/${id}`)
        .then(res=> {
            const data = res.data 
            const remaining = bookings.filter(booking=> booking._id !== id)
             setBookings(remaining)

        })
    
    }

    const handleConfirm = id =>{
        //  fetch(`http://localhost:5007/bookings/${id}`,{
        //     method: 'PATCH',
        //     headers:{
        //         'content-type' : 'application/json'
        //     },
        //     body: JSON.stringify({status: 'confirm'})         })
        //  .then(res => res.json())
        //  .then(data => {
        //      console.log(data)
        //      const remaining = bookings.filter(booking => booking._id !== id)

        //      const updated = bookings.find(booking => booking._id === id)
        //      updated.status = 'confirm'
        //      const newBookings = [updated,...remaining]
        //      setBookings(newBookings)
        //  })
        axiosSecure.patch(`/bookings/${id}`,{
             status: 'confirm'
        })
        .then(res=>{
           const data = res.data
                 const remaining = bookings.filter(booking => booking._id !== id)

             const updated = bookings.find(booking => booking._id === id)
             updated.status = 'confirm'
             const newBookings = [updated,...remaining]
             setBookings(newBookings)
        })
    }
    
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
        bookings.map(booking=> <Bookingtable key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></Bookingtable>)
      }
       
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Bookings;
