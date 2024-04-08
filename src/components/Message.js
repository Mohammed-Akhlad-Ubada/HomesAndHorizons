import React,{useContext, useEffect,useRef,useState} from 'react';
import PropertyContext from '../context/property/PropertyContext'
import MessageItem from '../components/MessageItem'
import { useNavigate } from 'react-router-dom';

export default function Message(props) {
const navigate=useNavigate();
    const context=useContext(PropertyContext);
    const {message,fetchAllMessage }=context;
    useEffect(()=>{
      if(localStorage.getItem('token')){
        fetchAllMessage();
      }
      else{
       navigate("/login");
      }
    
    // eslint-disable-next-line
    },[])
return (
    <>
   
 <div className="container">
 <h1>Your Messages</h1>
  <b>
 {message.length===0&&'No Messages are available'}
 </b>
 </div>
 <div className="container">
    <div className='row'>
      {message.map((message)=>{
  return <MessageItem key={message._id}  message={message} showAlert={props.showAlert}/>
})}
</div>
</div>
    </>
  );
}
