import React from 'react'
import { BASE_URL } from './../utils/constants';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const UserCard = ({user , clickAction}) => {
    const {_id ,firstName , lastName , photoUrl , age , gender , about} = user;
    
   
   
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src={photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    {age && gender && (<p>{ age + "  ,  " + gender.toUpperCase()}</p>)}
    <p>{about}</p>
    <div className="card-actions justify-around mt-10">
      <button onClick={()=> clickAction("intrested" , _id )} className="btn btn-secondary">Intrested</button>
      <button onClick={()=> clickAction("ignored" , _id )} className="btn btn-primary">Ignore</button>
    </div>
  </div>
</div>
  )
}

export default UserCard