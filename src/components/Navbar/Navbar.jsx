import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../public/sports-store-logo-template-vector.jpg'
import './Navbar.css'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import MyEquipment from './../Pages/MyEquipment';

const Navbar = () => {

    const {user,signOutUser} = useContext(AuthContext)
    
    const handleSignOut=()=>{

  
      signOutUser()
      toast.success('Logout successful' ,{position: "top-center",
        autoClose: 2000,})
    

    }
   




    return (
        <div className="navbar   bg-base-300 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
         {
          user?  <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 space-y-5 shadow"
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/allEquipment">All Sports Equipment</NavLink>
          <NavLink to="/addEquipment">Add Equipment</NavLink>
        <NavLink to={`/myEquipment/${user.email}`}>My Equipment</NavLink>
        <NavLink to="/myProfile">My Profile</NavLink>
         
        </ul> :
         <ul
         tabIndex={0}
         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 space-y-5 shadow"
       >
         <NavLink to="/">Home</NavLink>
         <NavLink to="/allEquipment">All Sports Equipment</NavLink>
         <NavLink to="/addEquipment">Add Equipment</NavLink>
       <NavLink to="/myEquipment">My Equipment</NavLink>
       <NavLink to="/myProfile">My Profile</NavLink>
        
       </ul>
         }
        </div>
        
        <img className="lg:w-10 w-8  rounded-full mr-2 lg:mr-0" src={logo} alt="career logo" />
        <Link to='/' className="lg:btn lg:btn-ghost  text-sm font-bold md:text-sm   lg:text-xl">Sports Equipments Store</Link>
        
      </div>
     {
      user?  <div className=" navbar-center hidden lg:flex lg:ml-40 ml-0 ">
      <ul className="menu menu-horizontal px-1 space-x-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allEquipment">All Sports Equipment</NavLink>
        <NavLink to="/addEquipment">Add Equipment</NavLink>
        <NavLink to={`/myEquipment/${user.email}`}>My Equipment</NavLink>
        <NavLink to="/myProfile">My Profile</NavLink>
        
      </ul>
    </div>
    :
    <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 space-x-5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/allEquipment">All Sports Equipment</NavLink>
      <NavLink to="/addEquipment">Add Equipment</NavLink>
      <NavLink to="/myEquipment">My Equipment</NavLink>
      <NavLink to="/myProfile">My Profile</NavLink>
      
    </ul>
  </div>
     }



      {
        user ?<> 
        
        <div className="relative group mr-2 gap-2 navbar-end ">
        {/* <div className="hidden lg:block">{user.email} </div> */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          
          <div className="w-10 group rounded-full">
            <img
            
              alt="Profile"
              src={user.photoURL}
            />
          </div>
        </div>
        <ul className="absolute right-0 top-10 mt-3 invisible group-hover:visible  bg-base-100 rounded-box z-10 w-20 p-2 shadow">
          <li>
            <a className="justify-between ">{user.displayName}</a>
          </li>
        </ul>
      </div>

      <div className="">
        <Link to=''>
        <button 
        onClick={handleSignOut} 
         className="btn btn-neutral ">Logout</button></Link>
      </div>
      

      </>
      
      :

       
        <div className="navbar-end gap-2">
        <Link to='/login'><button className="btn btn-neutral">Login</button></Link>
        <Link to='/register'><button className="btn btn-neutral">Register</button></Link>
      </div>

      }


    </div>









//   <div className="navbar bg-base-300 px-4">
//   {/* Navbar Start */}
//   <div className="navbar-start">
//     {/* Dropdown for small screens */}
//     <div className="dropdown">
//       <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16"
//           />
//         </svg>
//       </label>
//       <ul
//         tabIndex={0}
//         className="menu menu-compact dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow space-y-3"
//       >
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/allEquipment">All Sports Equipment</NavLink>
//         <NavLink to="/addEquipment">Add Equipment</NavLink>
//         {user && <NavLink to={`/myEquipment/${user.email}`}>My Equipment</NavLink>}
//         <NavLink to="/myProfile">My Profile</NavLink>
//       </ul>
//     </div>
//     {/* Logo and Brand Name */}
//     <img className="lg:w-10 w-8 rounded-full mr-2" src={logo} alt="Logo" />
//     <Link to="/" className="font-bold text-sm md:text-base lg:text-xl">
//       Sports Equipment Store
//     </Link>
//   </div>

//   {/* Navbar Center */}
//   <div className={`navbar-center hidden lg:flex ${user ? "lg:mr-52" : ""}`}>
//     <ul className="menu menu-horizontal px-1 space-x-5">
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/allEquipment">All Sports Equipment</NavLink>
//       <NavLink to="/addEquipment">Add Equipment</NavLink>
//       {user ? (
//         <NavLink to={`/myEquipment/${user.email}`}>My Equipment</NavLink>
//       ) : (
//         <NavLink to="/myEquipment">My Equipment</NavLink>
//       )}
//       <NavLink to="/myProfile">My Profile</NavLink>
//     </ul>
//   </div>

//   {/* Navbar End */}
//   <div className="navbar-end flex items-center gap-2">
//     {user ? (
//       <>
//         {/* Profile Picture Dropdown */}
//         <div className="relative group">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost btn-circle avatar"
//           >
//             <div className="w-10 rounded-full">
//               <img alt="Profile" src={user.photoURL} />
//             </div>
//           </div>
//           <ul className="absolute right-0 top-12 invisible group-hover:visible bg-base-100 rounded-box z-10 w-36 p-2 shadow">
//             <li>
//               <a>{user.displayName}</a>
//             </li>
//           </ul>
//         </div>
//         {/* Logout Button */}
//         <button
//           onClick={handleSignOut}
//           className="btn btn-neutral"
//         >
//           Logout
//         </button>
//       </>
//     ) : (
//       <>
//         <Link to="/login">
//           <button className="btn btn-neutral">Login</button>
//         </Link>
//         <Link to="/register">
//           <button className="btn btn-neutral">Register</button>
//         </Link>
//       </>
//     )}
//   </div>
// </div>








    );
};

export default Navbar;