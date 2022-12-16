import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    console.log(user);
    const location = useLocation()
    if(loading){
        return <div className="w-16 h-16 border-4 mx-auto my-36 border-dashed rounded-full animate-spin border-blue-900">
       
        </div>
    
    }
    if(user) {
        return children
        
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;