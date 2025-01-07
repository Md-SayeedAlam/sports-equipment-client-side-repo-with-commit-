import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import UpdateCard from '../Card/UpdateCard';
import Swal from 'sweetalert2';

const MyEquipment = () => {

    const data = useLoaderData()
    const [items,setItems] = useState(data)


    const handleDelete=(id)=>{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
    
                    fetch(`https://sports-equipments-server-omega.vercel.app/equipments/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            if (data.deletedCount) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your equipments has been deleted.",
                                    icon: "success"
                                });
    
                                // update the loaded coffee state
                                const remainingItems = items.filter(item => item._id !== id);
                                setItems(remainingItems);
    
                            }
                        })
    
                }
            });
    
        }




    // console.log(items)
//   const  {name,email,itemName,quantity,category,photo,process,customization,price,rating,description } = items


    return (


        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-gray-200 mt-10 mb-10">
        // {
        //   items?.map(item=><UpdateCard key={item._id} item={item} items={items} setItems={setItems}></UpdateCard>)
        // }
        // </div>

            
    <>
    <div className="w-full ">
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
          Action
         </th>
       </tr>
     </thead>
     <tbody>
       {items.map((item, index) => (
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


             {/* <div className="flex justify-center">
               <Link to={`/equipments/${item._id}`}>
                 <button className="btn btn-xxs bg-gray-300 text-[10px]">
                   Details
                 </button>
               </Link>
               <Link to={`/equipment/${item._id}`} ><button className="p-2 bg-base-300">Update</button></Link>
             <Link  ><button onClick={()=>handleDelete(item._id)} className="p-2 bg-base-300">Delete</button></Link>
             </div> */}


                <div className="flex flex-col justify-center items-center gap-2">
                    <Link to={`/equipments/${item._id}`}>
                      <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600">
                        Details
                      </button>
                    </Link>
                    <Link to={`/equipment/${item._id}`}>
                      <button className="px-3 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>







           </td>
         </tr>
       ))}
     </tbody>
   </table>
 </div> 

   </>




    );
};

export default MyEquipment;















// import React, { useState } from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const MyEquipment = () => {
//   const data = useLoaderData();
//   const [items, setItems] = useState(data);

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`https://sports-equipments-server-omega.vercel.app/equipments/${id}`, {
//           method: 'DELETE',
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.deletedCount) {
//               Swal.fire("Deleted!", "Your equipment has been deleted.", "success");
//               const remainingItems = items.filter((item) => item._id !== id);
//               setItems(remainingItems);
//             }
//           });
//       }
//     });
//   };

//   return (
//     <div className="w-full px-4 sm:px-6 lg:px-8">
//       <div className="overflow-x-auto">
//         <table className="table-auto w-full border border-gray-200">
//           <thead>
//             <tr>
//               {["No:", "Photo", "Item Name", "Price", "Category", "Details"].map((header) => (
//                 <th
//                   key={header}
//                   className="px-4 py-2 text-center text-sm font-semibold border border-gray-300 bg-gray-100"
//                 >
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((item, index) => (
//               <tr key={item._id} className="hover:bg-gray-50">
//                 <td className="px-4 py-2 text-sm border border-gray-300 text-center">
//                   {index + 1}
//                 </td>
//                 <td className="px-4 py-2 border border-gray-300 text-center">
//                   <img
//                     src={item.photo}
//                     alt={item.itemName}
//                     className="w-12 h-12 rounded-full object-cover mx-auto"
//                   />
//                 </td>
//                 <td className="px-4 py-2 text-sm border border-gray-300 text-center">
//                   {item.itemName}
//                 </td>
//                 <td className="px-4 py-2 text-sm border border-gray-300 text-center">
//                   ${item.price}
//                 </td>
//                 <td className="px-4 py-2 text-sm border border-gray-300 text-center">
//                   {item.category}
//                 </td>
//                 <td className="px-4 py-2 border border-gray-300">
//                   <div className="flex flex-col justify-center items-center gap-2">
//                     <Link to={`/equipments/${item._id}`}>
//                       <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600">
//                         Details
//                       </button>
//                     </Link>
//                     <Link to={`/equipment/${item._id}`}>
//                       <button className="px-3 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600">
//                         Update
//                       </button>
//                     </Link>
//                     <button
//                       onClick={() => handleDelete(item._id)}
//                       className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyEquipment;
