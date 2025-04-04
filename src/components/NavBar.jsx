import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
import { removeUser } from "../utils/userSlice";
import { removeFeed } from '../utils/feedSlice'

const NavBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });

      // Redux store से यूज़र डाटा हटाएं
      dispatch(removeUser());
      dispatch(removeFeed())

      // लॉगिन पेज पर रीडायरेक्ट करें
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };
  return (
    <div className="navbar bg-base-300 shadow-sm">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost text-xl">DevTinder 👨‍💻 </Link>
    </div>
    <div className="flex gap-2">
{ user &&     <div className="dropdown dropdown-end mx-5 flex gap-3 ">
  <p className='m-auto'>Welcome {user.firstName}</p>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          
          <div className="w-10 rounded-full ">
            <img
              alt="Tailwind CSS Navbar component"
              src={user.photoUrl} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <Link to = "/profile" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li><a>Settings</a></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>}
    </div>
  </div>
  )
}

export default NavBar