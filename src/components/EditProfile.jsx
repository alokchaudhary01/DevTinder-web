

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from './UserCard'
import axios from 'axios'
import { BASE_URL } from './../utils/constants';
import {addUser} from "../utils/userSlice"

const EditProfile = ({data}) => {

   
  
    const [firstName , setFirstName] = useState(data.firstName)
    const [lastName , setLastName] = useState(data.lastName)
    const [photoUrl , setphotoUrl] = useState(data.photoUrl)
    const [about , setabout] = useState(data.about)
    const [skills , setskills] = useState(data.skills)
    const [gender , setgender] = useState(data.gender)
    const [age , setage] = useState(data.age)
    const [error , setError] = useState("")
    const [showToast , setShowtoast] = useState(false)
    const dispatch = useDispatch()
    
    const saveProfile = async ()=>{
      try {
        const res = await axios.patch(BASE_URL + "/profile/edit" , {firstName , lastName , photoUrl , about , age , gender } , {withCredentials: true}) 
        dispatch(addUser(res?.data?.data))
        setShowtoast(true)
        setTimeout(() => {
          setShowtoast(false)
        }, 2000);
      } catch (error) {
        setError(error.response.data)
      }
    }
   

  return (
 <>
    <div className='flex justify-center my-10 gap-5'>
    
    <div className='flex justify-center '>
    <div className="card card-dash bg-base-300 w-96">
<div className="card-body">
  <h2 className="card-title ">Edit Profile</h2>
  <div>
  <fieldset className="fieldset mt-6">
<legend className="fieldset-legend">First Name</legend>
<input value={firstName} type="text" onChange={(e)=> setFirstName(e.target.value)} className="input" placeholder="Type here" />
</fieldset>

  <fieldset className="fieldset  ">
<legend className="fieldset-legend">Last Name</legend>
<input type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)} className="input" placeholder="Type here" />

</fieldset>

  <fieldset className="fieldset  ">
<legend className="fieldset-legend">Photo Url</legend>
<input type="text" value={photoUrl} onChange={(e)=> setphotoUrl(e.target.value)} className="input" placeholder="Type here" />

</fieldset>

  <fieldset className="fieldset  ">
<legend className="fieldset-legend">Age</legend>
<input type="text" value={age} onChange={(e)=> setage(e.target.value)} className="input" placeholder="Type here" />

</fieldset>

  <fieldset className="fieldset  ">
<legend className="fieldset-legend">Gender</legend>
<select type="text" value={gender} onChange={(e)=> setgender(e.target.value)} defaultValue="Choose Gender" className="select">
  
  <option>male</option>
  <option>female</option>
  
</select>

</fieldset>





  <fieldset className="fieldset  ">
<legend className="fieldset-legend">About</legend>
<input type="text" value={about} onChange={(e)=> setabout(e.target.value)} className="input" placeholder="Type here" />

</fieldset>

  <fieldset className="fieldset  ">
<legend className="fieldset-legend">Skills</legend>
<input type="text" value={skills} onChange={(e)=> setskills(e.target.value)} className="input" placeholder="Type here" />

</fieldset>



  </div>
  <p className='text-red-600'>{error}</p>
  <div className="card-actions justify-center mt-8">
    <button onClick={  ()=>{ setError("") ,saveProfile()}}  className="btn btn-primary">Update</button>
  </div>
</div>
</div>
</div>

<UserCard user ={{firstName , lastName , photoUrl , about , age , gender}}/>


{showToast && <div className="toast toast-top toast-center">
 
 <div className="alert alert-success">
   <span>Updted successfully.</span>
 </div>
</div>}

</div>
 </>
  )

  
}

export default EditProfile