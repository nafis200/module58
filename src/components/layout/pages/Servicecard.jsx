import { Link } from "react-router-dom";

const Servicecard = ({service}) => {
    const {_id,title, img, price} = service
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price:${price}</p>
        <div className="card-actions">
           <Link to={`/book/${_id}`}>

            <button className="btn btn-primary">Book Now</button>
           </Link>
        </div>
      </div>
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
    </div>
  );
};

export default Servicecard;
