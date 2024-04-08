import React,{useState,useContext} from 'react';
import PropertyContext from '../context/property/PropertyContext';
export default function AddProperty(props) {
  const[property,setproperty]=useState({image:"",price:"",phone:"",owner:"",location:"",description:"",type:""});
    const context=useContext(PropertyContext);
    const { addProperty }=context;
const handleOnClick=(e)=>{
    e.preventDefault();
    props.showAlert("Property Added Successfully","success");
    console.log(property);
addProperty(property);

setproperty({image:"",price:"",phone:"",owner:"",location:"",description:"",type:""})
}
const handleOnChange=(e)=>{
setproperty({...property,[e.target.name]:e.target.value})
}

  return (
    <>
    <div className='container my-3'>
       <h1>Add Property</h1>
      <form>
  <div className="form-group my-3">
    <label htmlFor="image">Image URL</label>
    <input type="text" className="form-control" id="image" name="image"  value={property.image} onChange={handleOnChange}/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="price">Price</label>
    <input type="text" className="form-control" id="price" name="price"  value={property.price} onChange={handleOnChange}/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="phone">Phone</label>
    <input type="text" className="form-control" id="phone" name="phone" minLength={10} maxLength={10} value={property.phone} onChange={handleOnChange}/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="owner">Owner</label>
    <input type="text" className="form-control" id="owner" name="owner"  value={property.owner} onChange={handleOnChange}/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="location">Location</label>
    <input type="text" className="form-control" id="location" name="location"  value={property.location} onChange={handleOnChange}/>
  </div>

  <div className="form-group">
    <label htmlFor="description">Description</label>
    <input type="text" className="form-control" id="description" name="description" value={property.description} onChange={handleOnChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="type">Type</label>
    <input type="text" className="form-control" id="type" name="type" value={property.type} onChange={handleOnChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleOnClick} disabled={property.image<5||property.description<5}>Add</button>
</form>
    </div>
    <div className='container my-3'>
    </div>
    </>
  );
}
