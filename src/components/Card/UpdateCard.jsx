import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCard = ({item,items,setItems}) => {

    const  {_id,name,email,itemName,quantity,category,photo,process,customization,price,rating,description }=item

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

                fetch(`http://localhost:5000/equipments/${_id}`, {
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
    return (
        <div data-aos="fade-right" className="card bg-base-100 w-96 shadow-xl ">
        <figure className="px-10 pt-10">
          <img
            src={photo}
            alt="image"
            className="rounded-xl w-[400px] h-[200px] " />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-bold">{itemName}</h2>
          <p className='font-semibold text-gray-400'><span className='font-semibold text-gray-600'>Item Name</span>: {itemName}</p>
          <p className='font-medium text-gray-400'><span className='font-semibold text-gray-600'>Category</span> :{category} </p>
          <p className='font-medium text-gray-400'><span className='font-semibold text-gray-600'>Price:</span> {price} </p>
          
          <p className='font-medium text-gray-400'><span className='font-semibold text-gray-600'>Description: </span> {description.slice(0,100)}...</p>
          <p className='font-medium text-gray-400'><span className='font-semibold text-gray-600'>Customization : </span> {customization}</p>
          <p className='font-medium text-gray-400'><span className='font-semibold text-gray-600'>Available Quantity : </span> {quantity}</p>
          <p className='font-medium text-gray-400'><span className='font-semibold text-gray-600'>Rating : </span> {rating}</p>
          <div className="card-actions justify-between">
         <Link to={`/equipments/${_id}`}><button className="btn bg-base-300 ">View Details</button></Link>
         <Link to={`/equipment/${_id}`} ><button className="btn bg-base-300">Update</button></Link>
         <Link  ><button onClick={()=>handleDelete(_id)} className="btn bg-base-300">Delete</button></Link>
          </div>
        </div>
      </div>
    );
};

export default UpdateCard;