import React,{useEffect} from 'react';
import{ Link, useNavigate}from "react-router-dom";
import { useLocation } from 'react-router-dom';
export default function UserNavbar() {
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
        <Link className={`nav-link ${location.pathname==='/apartment'?"active":""}`} to="/apartment">Apartment <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname==='/house'?"active":""}`}  to="/house">House</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname==='/land'?"active":""}`}  to="/land">Land</Link>
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
