import { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../../providers/Authprovider";



const Bookservices = () => {
    const services = useLoaderData()
    const {title, _id, price} = services
    const {user} = useContext(AuthContext)
    const handleBook = e =>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value
        const date = form.date.value 
        const email = user?.email
        const img = form.img.value
        const order = {
            customerName: name,
            img,
            email,
            date,
            service: title,
            service: _id,
            price:price
        }
       console.log(order);

       fetch('http://localhost:5007/bookings',{
         method: 'POST',
         headers:{
             'content-type' : 'application/json'
         },
         body:JSON.stringify(order)
       })
       .then(res => res.json())
       .then(data =>{
          console.log(data)
       })

    }
    return (
        <div>
            <h2 className="text-center">Hellow : {title}</h2>

            <form onSubmit={handleBook} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name = "name"
                  defaultValue={user?.displayName}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  placeholder="data"
                  className="input input-bordered"
                  name = "date"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name = "email"
                  defaultValue={user?.email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due amount</span>
                </label>
                <input
                  type="text"
                  name ="amount"
                  placeholder="Due amount"
                  className="input input-bordered"
                  defaultValue= {'$'+price}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">image</span>
                </label>
                <input
                  type="text"
                  name ="img"
                  placeholder="image"
                  className="input input-bordered"
                 
                />
              </div>
              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Order confirm</button>
              </div>
            </form>
        </div>
    );
};

export default Bookservices;