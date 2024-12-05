import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import MainLayout from './components/MainLayout/mainLayout';
import Error from './components/Error/Error';
import AllEquipment from './components/Pages/AllEquipment';
import AddEquipment from './components/Pages/AddEquipment';
import MyEquipment from './components/Pages/MyEquipment';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyProfile from './components/Pages/MyProfile';
import CardDetails from './components/CardDetails/CardDetails';

import UpdatePage from './components/Pages/UpdatePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/equipments')
      },
      {
        path:'/allEquipment',
        element:<AllEquipment></AllEquipment>,
        loader:()=>fetch('http://localhost:5000/equipments')
      },
      {
      path:'/addEquipment',
      element:<PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
      },
      {
        path:'/myEquipment/:email',
        element:<PrivateRoute><MyEquipment></MyEquipment></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/api/equipments?email=${params.email}`)
      },
      {
        path:'/myEquipment',
        element:<PrivateRoute><MyEquipment></MyEquipment></PrivateRoute>,
        
        
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/myProfile',
        element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path:'/equipments/:id',
        element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/equipments/${params.id}`)
      },
      {
        path:'/equipment/:id',
        element:<PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/equipments/${params.id}`)
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
