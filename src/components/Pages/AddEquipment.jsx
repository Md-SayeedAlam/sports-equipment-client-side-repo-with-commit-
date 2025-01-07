import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit =(e)=>{
    e.preventDefault();

    const form = e.target;
    const name = form.displayName.value;
    const email= form.email.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const customization = form.customization.value;
    const process = form.process.value;
    const itemName = form.itemName.value;


    const newItem = {name,email,itemName,quantity,category,photo,process,customization,price,rating,description }
    // console.log(newItem)

    fetch('https://sports-equipments-server-omega.vercel.app/equipments',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newItem)
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        if(data.insertedId){
            Swal.fire({
                title:'SUCCESS',
                text:'Equipment added successfully',
                icon:'success',
                confirmButtonText:'Close'
            })
            form.reset()
        }
    })

  }



  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add Sports Equipment</h2>

      <form onSubmit={handleSubmit}>
        {/* form name and email row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>

            <label className="input-group">
              <input
                type="text"
                name="displayName"
                id=""
                placeholder="name"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>

            <label className="input-group">
              <input
                type="text"
                name="email"
                id=""
                placeholder="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image</span>
            </label>

            <label className="input-group">
              <input
                type="text"
                name="photo"
                id=""
                placeholder="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form name and quantity row */}
        <div className=" md:flex mb-8 ">
          <div className="form-control md:w-1/2 lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>

            <label className="input-group">
              <input
                type="text"
                name="itemName"
                id=""
                placeholder="Item Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4  lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Available Product Quantity</span>
            </label>

            <label className="input-group">
              <input
                type="text"
                name="quantity"
                id=""
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form category and details row */}

        <div className=" md:flex mb-8">
          <div className="form-control md:w-1/2 lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>

            <label className="input-group">
              <input
                type="text"
                name="category"
                id=""
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4  lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>

            <label className="input-group">
              <input
                type="text"
                name="description"
                id=""
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form price and rating row */}
        <div className=" md:flex mb-8">
          <div className="form-control md:w-1/2  lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>

            <label className="input-group">
              <input
                type="text"
                name="price"
                id=""
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4  lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>

            <label className="input-group">
              <input
                type="text"
                name="rating"
                id=""
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>



    {/* form customize and processing row */}
    <div className=" md:flex mb-8">
          <div className="form-control md:w-1/2 lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>

            <label className="input-group">
              <input
                type="text"
                name="customization"
                id=""
                placeholder="Customization"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4  lg:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>

            <label className="input-group">
              <input
                type="text"
                name="process"
                id=""
                placeholder="Processing Time"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>


      




        <input
          type="submit"
          value="Add Item"
          className="btn btn-block btn-neutral"
        />
      </form>
    </div>
  );
};

export default AddEquipment;
