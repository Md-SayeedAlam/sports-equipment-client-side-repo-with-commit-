import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    const  {_id,name,email,itemName,quantity,category,photo,process,customization,price,rating,description }=item
    return (
        <div  className="card bg-base-100 w-96 shadow-xl ">
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
          <div className="card-actions justify-center">
         <Link to={`/equipments/${_id}`}><button className="btn btn-neutral">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Card;