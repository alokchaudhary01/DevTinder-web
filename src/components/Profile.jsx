import React, { useEffect } from 'react'
import EditProfile from './EditProfile'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import {addUser} from "../utils/userSlice"

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((store)=> store.user)
  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      dispatch(addUser(res.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
      console.error(err);
    }
  };
    useEffect(() => {
  if(!data){
    fetchUser();
  }
  }, []);
  return (
   data &&( <div><EditProfile data = {data}/></div>)
  )
}

export default Profile