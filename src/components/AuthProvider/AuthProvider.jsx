import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from './../../firebase/firebase.config';

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const[isUpdating,setUpdating]=useState(false)
    const [loading,setLoading] = useState(true)


    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }
    
    const signInWithGoogle=()=>{
       return signInWithPopup(auth,googleProvider)
    }

    const signInUSer = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }


    const manageProfile = (name,image) =>{
        
        setUser(user)
       
         return updateProfile(auth.currentUser,{
              displayName:name,photoURL:image
              
          })
        }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('currently logged user',currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[isUpdating])



    const authInfo={
        user,
        setUser,
       createUser,
       signInWithGoogle,
       signInUSer,
       signOutUser,
       manageProfile,
       setUpdating,
       loading,
       setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;