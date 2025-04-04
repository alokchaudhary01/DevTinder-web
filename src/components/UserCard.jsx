import React from 'react'

const UserCard = ({user}) => {
    const {firstName , lastName , photoUrl , age , gender , about} = user
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
      <button className="btn btn-secondary">Intrested</button>
      <button className="btn btn-primary">Ignore</button>
    </div>
  </div>
</div>
  )
}

export default UserCard