


const Bookingtable = ({booking}) => {
     const {customerName,img,email,date,price}= booking
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>

            <div>
              <div className="font-bold">{email}</div>
              <div className="text-sm opacity-50">{date}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm"> {customerName} </span>
        </td>
        <td>{email}</td>
        <td>${price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default Bookingtable;