import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure= axios.create({
    baseURL:'http://localhost:6001'
})
const useAxiosSecure = () => {

    const {logOut} =useAuth()
    const navigate = useNavigate()

      /***************************/ 
    axiosSecure.interceptors.request.use(function(config){
        const token =localStorage.getItem('access-token')
        // console.log('request stopped by interceptors',token)
        config.headers.authorization =`Bearer ${token}`
        return config
    },function(error){
        return Promise.reject(error);
    })
     /*******************/   
    axiosSecure.interceptors.response.use(function (response) {
        
        return response;
      }, async(error)=> {
        // console.log('status error in the interceptor',error)
        const status= error.response.status
    //    console.log('status error in the interceptor',status)
       if(status===401 || status===403){
        await logOut()
        navigate('/login')
       }
        return Promise.reject(error);
      });
        
    
    return axiosSecure
};

export default useAxiosSecure;