import React,{useContext} from 'react';
import PropertyContext from '../context/property/PropertyContext';
export default function Propertyitem(props) {
  const context=useContext(PropertyContext);
  const {deleteProperty}=context;
  const {property,updateProperty}=props;
  return (
    <div className='col-md-3'>
    <div className="card mb-4 mt-3" >
  <img src={property.image} className="card-img-top" alt="404" height="200" width="200"/>
  <div className="card-body">
  <div className='d-flex align-items-center'>
 <h5>₹ {property.price}</h5>
<i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteProperty(property._id)
props.showAlert("Property Deleted Successfully","success")
}}></i>
 <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateProperty(property)}}></i>
</div>
    <p className="card-text">

 <i className="fa-solid fa-phone"></i> {property.phone} <br/>
 <i className="fa-solid fa-user"></i> {property.owner} <br/>
 <i className="fa-solid fa-location-dot"></i> {property.location}<br/>

 </p>
    </div>

</div>
</div>
  );
}
