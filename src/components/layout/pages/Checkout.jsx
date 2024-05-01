import { useLoaderData } from "react-router";




const Checkout = () => {
    const services = useLoaderData()
    const {title, _id} = services
    return (
        <div>
            <h1>Book Services : {title}</h1>
        </div>
    );
};

export default Checkout;
