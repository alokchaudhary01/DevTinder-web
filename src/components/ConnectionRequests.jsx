import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { addRequests, removeRequests } from '../utils/requestSlice'

const ConnectionRequests = () => {
    const dispatch = useDispatch()
    
    const data = useSelector((store)=> store.requests)

    const handleButton = async (status , connectionId )=>{
       const res = await axios.post(BASE_URL + `/request/review/${status}/${connectionId}` ,{}, {withCredentials: true}) 
       dispatch(removeRequests(connectionId))
    }

    const fetchRequest = async ()=> {
      
     try {
      const res = await axios.get(BASE_URL + "/user/requests/recieved", {
        withCredentials: true,
      });
    
      dispatch(addRequests(res.data.data))
     } catch (error) {
      // console.log()
     } 
    }

useEffect(()=>{
  

  fetchRequest()
},[])


  return (
    <>
    <h1 className="text-4xl my-8 text-center">Requests</h1>
    {data &&
      data.map((user , index) => (
        <div key={index} className="bg-[#1d3a8a] text-white rounded-2xl w-[90%] max-w-xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 my-4 shadow-lg">
        {/* Left: Image + Info */}
        <div className="flex items-center gap-4">
          <img
            src={user.fromUserId.photoUrl}
            alt="User"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover"
          />
          <div>
            <h2 className="font-semibold text-lg">{user.fromUserId.firstName} {user.fromUserId.lastName}</h2>
            <p className="text-sm">{user.fromUserId.age} {user.fromUserId.gender}</p>
            <p className="text-sm text-gray-200">{user.fromUserId.about || "This is a default about of the user!"}</p>
          </div>
        </div>
      
        {/* Right: Both Buttons */}
        <div className="flex gap-3">
          <button
          onClick={()=> handleButton("accepted" , user._id  , index)} className="px-4 py-2 rounded-xl text-sm font-semibold bg-green-600 hover:bg-green-700 hover:scale-105 transition duration-300"
          >
            Accept
          </button>
          <button
           onClick={()=>handleButton("rejected" , user._id )}  className="px-5 py-2 rounded-xl text-sm font-semibold bg-red-600 hover:bg-red-700 hover:scale-105 transition duration-300"
          >
            Reject
          </button>
        </div>
      </div>
      
        
 
      ))}

  </>

  )
}

export default ConnectionRequests



// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { BASE_URL } from '../utils/constants';
// import { addRequests } from '../utils/requestSlice';

// const ConnectionRequests = () => {
//   const dispatch = useDispatch();
//   const data = useSelector((store) => store.requests);

//   const fetchRequest = async () => {
//     console.log("🚀 FetchRequest function called");
//     try {
//       const res = await axios.get(BASE_URL + "/user/requests/recieved", {
//         withCredentials: true,
//       });
//       console.log("✅ API Response:", res.data);
//       dispatch(addRequests(res.data.data));
//     } catch (error) {
//       console.error("❌ API Error:", error);
//     }
//   };

//   useEffect(() => {
//     console.log("✅ useEffect called");
//     fetchRequest();
//   }, []);

//   return (
//     <>
//       <h1 className="text-4xl my-8 text-center">Connections</h1>
//       {!data ? (
//         <p className="text-center text-gray-400">Loading...</p>
//       ) : (
//         data.map((user) => (
//           <div key={user._id} className="bg-blue-800 text-white p-4 rounded-xl my-4">
//             {user.firstName} {user.lastName}
//           </div>
//         ))
//       )}
//     </>
//   );
// };

// export default ConnectionRequests;