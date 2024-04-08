import React from 'react';
import { useState,useContext } from 'react';
import brandlogo from '../image/Homes&HORIZONS.png';
import PropertyContext from '../context/property/PropertyContext';
export default function Home() {
  const context=useContext(PropertyContext);
  const {sendQuery}=context;
  const  [query, setquery] = useState({email:"",name:"",query:""});
  const handleOnChange=(e)=>{
    setquery({...query,[e.target.name]:e.target.value})
  }
  const handleOnClick=(e)=>{
    e.preventDefault();
    sendQuery(query);
    setquery({email:"",name:"",query:""})

  }
  return (
 
<>
<div className="container my-2">
<div id="carouselExample" className="carousel slide my-2">

  <div className="carousel-inner">
  
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="640" className="d-block w-100" alt="404"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="640" className="d-block w-100"  alt="404"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="640"  className="d-block w-100" alt="404"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<h2 className='my-3'>About Us</h2>
<div className="row row-cols-1 row-cols-md-2">
  <div className="col mb-2">
    <div className="card">
      <img src={brandlogo} className="card-img-top" alt="..." height="300" width="200"/>
      <div className="card-body" >
        <h5 className="card-title">Welcome to HOMES & HORIZONS</h5>
        <p className="card-text">Welcome to Homes & Horizons, your premier destination for finding your dream home! With our extensive listings and dedicated team of professionals, we're here to guide you every step of the way in your real estate journey.</p>
      </div>
    </div>
  </div>
  <div className="col mb-2">
    <div className="card">
      <img src="https://t3.ftcdn.net/jpg/03/96/59/82/360_F_396598277_fmx8Ykhw4woErijL1CCug9563VwLOKxt.jpg" height="300" width="200" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Our Services</h5>
        <p className="card-text">At Homes & Horizons, we pride ourselves on delivering exceptional service and results to our clients. Here's why you should choose us for your real estate needs:
With years of experience in the industry, our team brings a wealth of knowledge and expertise to every transaction.</p>
      </div>
    </div>
  </div>
</div>
<form onSubmit={handleOnClick}>
  <div className="form-group my-2">
    <h2>Contact Us</h2>
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name="email" value={query.email} onChange={handleOnChange} placeholder="name@example.com"/>
  </div>
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" name="name"  value={query.name} onChange={handleOnChange} placeholder="eg. jack williams"/>
  </div>
 <div className="form-group">
    <label htmlFor="query">Your Query</label>
    <textarea className="form-control" id="query" name="query" value={query.query} onChange={handleOnChange}  rows="3"></textarea>
  </div>
  <button className='btn btn-primary' type="submit">Submit</button>
</form>

<div className=" my-3">
    <span className="text-muted">&copy; 2030 copyright Homes & Horizons </span>
  </div>
</div>
</>
  );
}
