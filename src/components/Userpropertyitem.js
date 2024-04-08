import React from 'react';
export default function Userpropertyitem(props) {
  const {property,viewProperty}=props;

  return (
    <div className='col-md-3'>
    <div className="card mb-4 mt-3" >
  <img src={property.image} className="card-img-top" alt="404" height="200" width="200"/>
  <div className="card-body">
 <h5 className="card-title">₹ {property.price}</h5>
 <p className="card-text">
<i className="fa-solid fa-user"></i> {property.owner} <br/>
</p>
<button className="btn btn-primary" onClick={()=>{viewProperty(property)}}>View More</button>
    </div>

</div>
</div>
  );
}
