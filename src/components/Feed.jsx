import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addFeed , removeOneFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";


const Feed = () => {
  const user = useSelector((store) => store.user);
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();


  const handleSendRequest = async (status , userId) => {
  
    try {
      const res = await axios.post(BASE_URL + `/request/send/${status}/${userId}` , {} ,  {withCredentials: true})
     
     dispatch(removeOneFeed(userId))
    } catch (error) {
      //handle error
    }
  }

  const getFeed = async () => {
    if (feed && feed.length > 0) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, [user]);

  return (
    feed && (
      <div className="flex justify-center my-10">
        {feed && feed.length > 0 ? ( 
          <UserCard  user={feed[0]} clickAction = {handleSendRequest} />
        ): (
          <div className="text-center text-xl font-semibold mt-10 text-gray-500">
            No users found
          </div>
        )}
      </div>
    )
  );
};

export default Feed;
