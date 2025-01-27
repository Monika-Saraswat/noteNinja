import React from 'react'
import LogOutBtn from './LogOutBtn'
import {useAuthContext } from '../Context/AuthContext'
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
    const {authUser} = useAuthContext();
    const profilePicUrl = authUser.profilePic.startsWith('http') ? authUser.profilePic : `https://movie-app-rrok.onrender.com${authUser.profilePic}`;
  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
        <span className="btn btn-ghost text-xl">NoteNinja</span>
        </div>
        <div className="flex-none gap-2">
            <div className="dropdown dropdown-end dropdown-hover">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={profilePicUrl} />
                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="/playlist/new" className="w-full text-left"><FaPlus className=' inline-block w-5 h-5 cursor-pointer text-gray-400' />New Note</Link></li>
                    <li><LogOutBtn/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar