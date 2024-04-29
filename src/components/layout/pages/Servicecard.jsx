
const Servicecard = ({service}) => {
    const {title, img, price} = service
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price:${price}</p>
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
