import React,{useContext} from 'react';
import PropertyContext from '../context/property/PropertyContext';
export default function Propertyitem(props) {
  const context=useContext(PropertyContext);
  const {deleteMessage}=context;
  const {message}=props;
  return (
    <div className='col-md-4'>
    <div className="card mb-4 mt-3" >
  <div className="card-body">
  <div className='d-flex align-items-center'>
 <h5>Someone has shown interest in {message.description}, {message.type}, {message.location}</h5>
<i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteMessage(message._id)
props.showAlert("Message Deleted Successfully","success")
}}></i>
</div>
<b>Message:</b>
    <p className="card-text">
{message.message}
</p>
    </div>

</div>
</div>
  );
}
