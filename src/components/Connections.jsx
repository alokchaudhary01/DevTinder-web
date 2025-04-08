import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addconnections } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.connection);

  const fetchConneections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/connections", {
        withCredentials: true,
      });

      dispatch(addconnections(res.data.data));
    } catch (error) {
      // handle err case
    }
  };

  useEffect(() => {
    fetchConneections();
  }, []);

  return (
    <>
      <h1 className="text-4xl my-8 text-center">Connections</h1>
      {data &&
        data.map((user , index) => (
          
        
          
          <div key={index} className="bg-[#1d3a8a] text-white rounded-2xl w-[90%] max-w-xl mx-auto flex items-center gap-4 p-4 my-4 shadow-lg">
          <img
            src={user.photoUrl}
            alt="User"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover"
          />
          <div>
            <h2 className="font-semibold text-lg">{user.firstName} {user.lastName}</h2>
            <p className="text-sm">{user.age} {user.gender}</p>
            <p className="text-sm text-gray-200">{user.about || "This is a default about of the user!"}</p>
          </div>
        </div>
        ))}

    </>
  );
};

export default Connections;
