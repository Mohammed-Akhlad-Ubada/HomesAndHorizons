import React from 'react';
import{ Link, useNavigate}from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
export default function Navbar(props) {
  const location = useLocation();
  const Navigate=useNavigate();
  const handleLogout=()=>{
  localStorage.removeItem('token');
  Navigate("/");

  }
  useEffect(()=>{

  },[location])
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">Homes & Horizons</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item ">
        <Link className={`nav-link ${location.pathname==='/home'?"active":""} ${location.pathname==='/'||location.pathname==='/userlogin'||location.pathname==='/sellerlogin'||location.pathname==='/sellersignup'||location.pathname==='/sellersignup'?"d-none":""}`} to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
    <li className="nav-item ">
        <Link className={`nav-link ${location.pathname==='/message'?"active":""} ${location.pathname==='/'||location.pathname==='/userlogin'||location.pathname==='/sellerlogin'||location.pathname==='/sellersignup'||location.pathname==='/sellersignup'?"d-none":""}`} to="/message">Message<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item dropdown" >
        <Link className={`nav-link dropdown-toggle ${props.display==="none"?"d-none":""}` } to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Get Started
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/usersignup">User Signup</Link>
          <Link className="dropdown-item" to="/userlogin">User Login</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/sellersignup">Seller Signup</Link>
          <Link className="dropdown-item" to="/sellerlogin">Seller Login</Link>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
   {localStorage.getItem('token')&&<Link className="btn btn-danger mx-1 " to="/" role="button" onClick={handleLogout}>Logout</Link>}
    </form>
  </div>
</nav>
</>
  );
}
