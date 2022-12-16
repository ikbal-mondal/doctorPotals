import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const navigate = useNavigate()
     const {logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then(() =>{
           navigate('login')
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
          <h2 className='text-red-700'>  Something went wrong !!</h2>
          <p className='text-red-400'>{error.statusText || error.message}</p>
          <h3 className='text-3xl'>Please <button onClick={handleLogOut}>Sing Out</button> and log back in</h3>
        </div>
    );
};

export default DisplayError;