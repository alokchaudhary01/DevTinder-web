import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'


const Login = () => {
    
    const [emailId , setEmailId] = useState("")
    const [password , setPassword] = useState("")
    const [error , setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
   const handleLogin = async ()=>{
   
    try{
     const res = await axios.post( BASE_URL +  "/login" , {
        emailId,password
     }, {withCredentials: true}) 

     dispatch(addUser(res.data))
     navigate("/feed")
    }catch(err){
      setError(err?.response?.data || "Something went wrong ")
        console.error()
    }
   }

  return (
  <div className='flex justify-center my-10'>
      <div className="card card-dash bg-base-300 w-96">
  <div className="card-body">
    <h2 className="card-title ">Login</h2>
    <div>
    <fieldset className="fieldset mt-6">
  <legend className="fieldset-legend">Email id {emailId}</legend>
  <input value={emailId} type="email" onChange={(e)=> setEmailId(e.target.value)} className="input" placeholder="Type here" />
 </fieldset>

    <fieldset className="fieldset  ">
  <legend className="fieldset-legend">Password</legend>
  <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder="Type here" />
 
</fieldset>
    </div>
    <p className='text-red-600'>{error}</p>
    <div className="card-actions justify-center mt-8">
      <button onClick={handleLogin} className="btn btn-primary">Login</button>
    </div>
  </div>
</div>
  </div>
  )

  
}

export default Login