import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const useToken = email => {
    const [token,setToken] = useState('')
    const {loading} = useContext(AuthContext)
   useEffect(()=> {
   if(email){
    fetch(`https://doctors-portal-server-b1sdo6rmh-ikbal-mondal.vercel.app/jwt?email=${email}`)
    .then(res => res.json())
        .then(data => {
          if(data.accessToken){
          localStorage.setItem('accessToken',data.accessToken);
          setToken(data.accessToken)
          loading(true)
          }
        
        })
   }
   },[email, loading])
   return [token];
}
export default useToken;