import React from 'react'
import logo from "../images/logo.jpg"
import pro_pic from "../images/pro_pic1.png"
import "../CSS/Navbar.css"
import { Link } from "react-router-dom";

import { MdLogout } from "react-icons/md";

export const Navbar = ({user}) => {

    // console.log("name=>",user)

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm ">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={logo} alt=""  className=' img-thumbnail' width={40} height={40}/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                <li className="nav-item">
                <Link 
                className={`nav-link ${({ isActive }) => (isActive ? 'text-info' : 'inactive')}`} 
                aria-current="page" to="/dash-board">Home</Link>
                </li>
                <li className="nav-item">
                <Link
                 className={`nav-link ${({ isActive }) => (isActive ? 'text-info' : 'inactive')}`} 
                 to="/employee-list">Employee List</Link>
                </li>

            </ul>

            <form className="d-flex col-lg-3  right_navbar_items">
                {/* <p class=" me-2" type="search"> monish </p>
                <button class="btn" type="submit">logout</button> */}
                <ul className="navbar-nav  fs-5">
                    <li className='pe-4'>
                         <img src={pro_pic} className='rounded-circle' alt="" width={35} height={35} />  {user.uname} </li>
                    <Link to="/logout" className='text-dark' style={{cursor:"pointer",textDecoration:"none"}}>logout  <MdLogout/> </Link>
                </ul>
            </form>

            </div>
        </div>
        </nav>
    </>
  )
}
