import React,{useContext, useEffect,useRef,useState} from 'react';
import PropertyContext from '../context/property/PropertyContext'
import Userpropertyitem from './Userpropertyitem';
import { useNavigate } from 'react-router-dom';

export default function Property(props) {
const navigate=useNavigate();
    const context=useContext(PropertyContext);
    const { userProperty,userFetchAllProperty,sendMessage}=context;
    useEffect(()=>{
      if(localStorage.getItem('token')){
        const {type}=props;
       userFetchAllProperty(type.toString());
  }
      else{
       navigate("/userlogin");
      }
    
    // eslint-disable-next-line
    },[userProperty])

const ref= useRef(null);
const Closeref=useRef(null);
const[Property,setproperty]=useState({id:"",eimage:"",eprice:"",ephone:"",eowner:"",elocation:"",edescription:"",etype:""});
    const viewProperty=(currentproperty)=>{
   ref.current.click();
   setproperty({id:currentproperty._id,
    eimage:currentproperty.image,
    eprice:currentproperty.price,
    ephone:currentproperty.phone,
    eowner:currentproperty.owner,
    elocation:currentproperty.location,
    edescription:currentproperty.description,
    etype:currentproperty.type});
    
    setMessage({ownerid:currentproperty.user,
      phone:currentproperty.phone,
      location:currentproperty.location,
      description:currentproperty.description,
      type:currentproperty.type});
    }
    const[Message,setMessage]=useState({ownerid:"",message:"",phone:"",location:"",description:"",type:""});
 const handleOnChange=(e)=>{
    setMessage({...Message,[e.target.name]:e.target.value});
  }
 const handleOnClick=(e)=>{
sendMessage(Message);
e.preventDefault();
setMessage({message:" "});
 }


  return (
    <>
    <div className="container">
<button type="button" ref={ref} className="btn btn-primary d-none"  data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Property</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="card mb-3" >
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={Property.eimage} height="200"   className="card-img" alt="404"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">₹ {Property.eprice}</h5>
        <p className="card-text">
        <i className="fa-solid fa-phone"></i> {Property.ephone} <br/>
        <i className="fa-solid fa-user"></i> {Property.eowner} <br/>
        <i className="fa-solid fa-location-dot"></i> {Property.elocation}<br/>
        <i className="fa-solid fa-pen"></i> {Property.edescription} <br/>
        <i className="fa-solid fa-house"></i> {Property.etype}<br/>
       </p>
       <div className="d-felx">
       <textarea className="form-control" id="message" name="message" onChange={handleOnChange} value={Message.message} placeholder="type your message here" rows="3"></textarea>
       <button type="button" className="btn btn-primary my-2"  onClick={handleOnClick}>Send Message</button>
       </div>
         </div>
    </div>
  </div>
</div>
      </div>
      <div className="modal-footer">
        <button type="button" ref={Closeref} className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
 <h1>{props.type.charAt(0).toUpperCase()+props.type.slice(1)} Property</h1>
 <div className="container">
  <b>
 {userProperty.length===0&&'No Property are available'}
 </b>
 </div>
    <div className='row'>
      {userProperty.map((property)=>{
  return <Userpropertyitem key={property._id} viewProperty={viewProperty} property={property} />
})}
    </div>
    </div>
    </>
  );
}
