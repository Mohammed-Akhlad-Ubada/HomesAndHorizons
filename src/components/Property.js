import React,{useContext, useEffect,useRef,useState} from 'react';
import PropertyContext from '../context/property/PropertyContext'
import Propertyitem from './Propertyitem';
import AddProperty from './AddProperty';
import { useNavigate } from 'react-router-dom';

export default function Property(props) {
const navigate=useNavigate();
    const context=useContext(PropertyContext);
    const { property,getAllProperty,editProperty }=context;
    useEffect(()=>{
      if(localStorage.getItem('token')){
        getAllProperty();
      }
      else{
       navigate("/login");
      }
    
    // eslint-disable-next-line
    },[])

const ref= useRef(null);
const Closeref=useRef(null);
const[Property,setproperty]=useState({id:"",eimage:"",eprice:"",ephone:"",eowner:"",elocation:"",edescription:"",etype:""});
    const updateProperty=(currentproperty)=>{
   ref.current.click();
   setproperty({id:currentproperty._id,
    eimage:currentproperty.image,
    eprice:currentproperty.price,
    ephone:currentproperty.phone,
    eowner:currentproperty.owner,
    elocation:currentproperty.location,
    edescription:currentproperty.description,
    etype:currentproperty.type});
    }

    const handleOnClick=(e)=>{
      editProperty(Property.id,Property.eimage,Property.eprice,Property.ephone,Property.eowner,Property.elocation,Property.edescription,Property.etype);
      props.showAlert("Property Updated Successfully","success")
      Closeref.current.click();
      e.preventDefault();
  }
  
  const handleOnChange=(e)=>{
  setproperty({...Property,[e.target.name]:e.target.value})
  }


  return (
    <>
    <AddProperty showAlert={props.showAlert}></AddProperty>
    <div className="container">
<button type="button" ref={ref} className="btn btn-primary d-none"  data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Property</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
  <div className="form-group my-3">
    <label htmlFor="eimage">Image URL</label>
    <input type="text" className="form-control" id="eimage" name="eimage"  value={Property.eimage} onChange={handleOnChange}/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="eprice">Price</label>
    <input type="text" className="form-control" id="eprice" name="eprice"  value={Property.eprice} onChange={handleOnChange}/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="ephone">Phone</label>
    <input type="text" className="form-control" id="ephone" name="ephone"  value={Property.ephone} onChange={handleOnChange}/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="eowner">Owner</label>
    <input type="text" className="form-control" id="eowner" name="eowner"  value={Property.eowner} onChange={handleOnChange}/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="elocation">Location</label>
    <input type="text" className="form-control" id="elocation" name="elocation"  value={Property.elocation} onChange={handleOnChange}/>
  </div>

  <div className="form-group">
    <label htmlFor="edescription">Description</label>
    <input type="text" className="form-control" id="edescription" name="edescription" value={Property.edescription} onChange={handleOnChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="etype">Type</label>
    <input type="text" className="form-control" id="etype" name="etype" value={Property.etype} onChange={handleOnChange}/>
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" ref={Closeref}className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleOnClick} disabled={Property.eimage<5||Property.edescription<5}>Update</button>
      </div>
    </div>
  </div>
</div>
 <h1>Your Property</h1>
 <div className="container">
  <b>
 {property.length===0&&'No Property are available'}
 </b>
 </div>
    <div className='row'>
      {property.map((property)=>{
  return <Propertyitem key={property._id} updateProperty={updateProperty} property={property} showAlert={props.showAlert}/>
})}
    </div>
    </div>
    </>
  );
}
