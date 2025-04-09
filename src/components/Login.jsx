import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'



const Login = () => {
    
    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [emailId , setEmailId] = useState("")
    const [password , setPassword] = useState("")
    const [error , setError] = useState("")
    const [isLoginForm , setIsLoginForm] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()

const handleSignUp = async ()=>{
  try {
    const res = await axios.post(BASE_URL+ "/signup" , {firstName , lastName , emailId , password} ,{ withCredentials:true} )
    navigate("/profile")

  } catch (error) {
  //handle error  
  }

}





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
    <h2 className="card-title ">{isLoginForm ? "Login" : "Sign Up"}</h2>
    <div>
   {!isLoginForm && <> <fieldset className="fieldset mt-6">
  <legend className="fieldset-legend">First Name {firstName}</legend>
  <input value={firstName} type="email" onChange={(e)=> setFirstName(e.target.value)} className="input" placeholder="Type here" />
 </fieldset>
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Last Name {lastName}</legend>
  <input value={lastName} type="email" onChange={(e)=> setLastName(e.target.value)} className="input" placeholder="Type here" />
 </fieldset></> }
    <fieldset className="fieldset ">
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
      <button onClick={ isLoginForm? handleLogin:handleSignUp } className="btn btn-primary">{isLoginForm ? "Login" : "Sign Up"}</button>
    </div>
<p className='cursor-pointer text-right mt-1' onClick={()=> setIsLoginForm(!isLoginForm)}>{isLoginForm?"New User! Sign Up" :"Already have a account Login"}</p>
    
  </div>
</div>
  </div>
  )

  
}

export default Login