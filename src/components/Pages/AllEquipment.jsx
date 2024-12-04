import React from "react";
import { Link, Navigate, useLoaderData } from "react-router-dom";

const AllEquipment = () => {
  const equipment = useLoaderData();
  console.log(equipment);
  return (
    <div className="overflow-hidden flex justify-center items-center mt-10 bg-base-200">
      <table className="">
        <thead>
          <tr>
            <th className="mr-2">No:</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {equipment.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.itemName}</td>

              <td>${item.price}</td>
              <td>{item.category}</td>
              <td>
              <Link to={`/equipments/${item._id}`}><button className="btn bg-gray-300 text-sm">View Details</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllEquipment;

{
  /* <div className="block md:hidden">
    {equipment.map((item, index) => (
      <div
        key={item._id}
        className="mb-4 p-4 border border-gray-200 rounded shadow-sm bg-white"
      >
        <p>
          <strong>No:</strong> {index + 1}
        </p>
        <p>
          <strong>Item Name:</strong> {item.itemName}
        </p>
        <p>
          <strong>Price:</strong> ${item.price}
        </p>
        <p>
          <strong>Category:</strong> {item.category}
        </p>
        <button
          className="btn mt-2 text-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          onClick={() => Navigate(`/equipment/${item._id}`)}
        >
          View Details
        </button>
      </div>
    ))}
  </div> */
}
