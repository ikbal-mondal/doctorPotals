import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext()
const auth = getAuth(app)
const googleprovider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
   const [loading, setLoading] = useState(true)
     const  createUser = (email,password) => {
         setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
     }

     const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }

     const updateUser = (userInfo) => {
        setLoading(true)
          return updateProfile(auth.currentUser,userInfo)
     }

    const googleSingIn = ()  => {
        setLoading(true)
        return signInWithPopup(auth,googleprovider)
    }
     const logOut = () => {

        setLoading(true)
        return signOut(auth)
     }



 useEffect(() => {
  const unsubscribe  = onAuthStateChanged(auth,currentUser => {
        console.log('user observing');
        setUser(currentUser)
        setLoading(false)
    });
    return () => unsubscribe()
},[])



    const authInfo = {
        createUser,
          signIn,
          logOut,
          user,
          updateUser,
          loading,
          googleSingIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;