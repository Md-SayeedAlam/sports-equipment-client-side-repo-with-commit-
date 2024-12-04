import React, { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const MyProfile = () => {

    // useEffect(() => {
    //     document.title = "My Profile || Career-Counseling";
    //   }, []);

  const { user,manageProfile,setUser,setUpdating } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSubmit = (e)=>{

    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    // console.log(name,photo,user)

    manageProfile(name,photo)
    .then(()=>{
        
        e.target.reset()  

        setUpdating((prev)=>!prev)
        
        Swal.fire({
            title: "Success",
            text: "SuccessFully Updated Profile",
            icon: "success",
            confirmButtonText: "Close",
          });
          navigate('/')
          

        
    })
    .catch(err=>{
        // console.log('ERROR',err.message)
        return toast.error('Profile Not Updated' ,{position: "top-center",
            autoClose: 2000,})
        
    })

  }

  return (
   <div className="flex flex-row justify-center items-center mt-10 mb-10">
     <div className="card  bg-base-100 w-96 shadow-xl h-full">
        <h2 className="text-2xl font-bold text-center">My Profile</h2>
      <figure className="px-10 pt-10">
        <img
          src={user?.photoURL}
          alt="photo"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name : {user?.displayName}</h2>
        <p>Email : {user.email}</p>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="pt-5">
      <button  className="btn btn-neutral px-10">Update</button>
    </div>
          </form>
          
      </div>
    </div>
   </div>
  );
};

export default MyProfile;
