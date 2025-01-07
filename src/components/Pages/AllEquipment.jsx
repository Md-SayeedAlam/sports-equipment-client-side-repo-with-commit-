import React, { useContext, useState } from "react";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AllEquipment = () => {
  const data = useLoaderData();
  const {user} = useContext(AuthContext)

  // console.log(data);

  const [equipment, setEquipment] = useState(data);

  const handleSort = () => {
    const sortedEquipment = [...equipment].sort((a, b) => 
      parseFloat(a.price) - parseFloat(b.price))
    // console.log(sortedEquipment)
    setEquipment(sortedEquipment);
  };




  return (
   

    

<div className="flex flex-col gap-4 justify-center items-center mt-6 bg-base-200 p-3">
  <div>
    <button onClick={handleSort} className="btn btn-neutral ">
      Sort By Price(ASC)
    </button>
  </div>
 {/* added responsive classes in this table */}

  {/* <div className="w-full ">
    <table className="table-auto w-full border border-gray-200">
      <thead>
        <tr className="">
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            No:
          </th>
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            Photo
          </th>
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            Item Name
          </th>
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            Price
          </th>
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            Category
          </th>
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            Details
          </th>
        </tr>
      </thead>
      <tbody>
        {equipment.map((item, index) => (
          <tr
            key={item._id}
            className=""
          >
            <td className="px-2 py-1 text-xs border border-gray-200 text-center">
              {index + 1}
            </td>
            <td className="px-2 py-1 border border-gray-200">
              <img
                src={item.photo}
                alt={item.itemName}
                className="w-8 h-8 rounded-full object-cover mx-auto"
              />
            </td>
            <td className="px-2 py-1 text-xs border text-center border-gray-200 break-words">
              {item.itemName}
            </td>
            <td className="px-2 py-1 text-xs border border-gray-200 text-center">
              ${item.price}
            </td>
            <td className="px-2 py-1 text-xs border text-center border-gray-200 break-words">
              {item.category}
            </td>
            <td className="px-2 py-1 text-xs border border-gray-200">
              <div className="flex justify-center">
                <Link to={`/equipments/${item._id}`}>
                  <button className="btn btn-xxs bg-gray-300 text-[10px]">
                    Details
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div> */}


 


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
  {equipment.map((item, index) =><Card item={item} key={index}></Card>)}
  </div>









</div>






  );
};

export default AllEquipment;

