import { useContext } from "react";
import { AuthContext } from "../../../../providers/Authprovider";



const Registration = () => {
    const {createUser} = useContext(AuthContext)
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);

        createUser(email,password)
        .then(result => {
           const user = result.user;
           console.log(user);
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
           <img src="https://i.ibb.co/T2cpBd5/888.jpg" alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-5">Sign up!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" 
                name ="email"
                required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered"
                name ="password"
                required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Registration;