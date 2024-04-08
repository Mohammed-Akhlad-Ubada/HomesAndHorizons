import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Usersignup(props) {
  const navigate=useNavigate();
  const  [credentials, setCredentials] = useState({name:"",email:"",password:""});
   const handleClick=async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/CreateUser`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
    
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password}) 
    });
    const json=await response.json();
    console.log(json);
    
      if(json.success){
        localStorage.setItem('token',json.token);
         props.showAlert("Account created successfully","success");
        navigate("/userview");
      }
      else{
        props.showAlert("Invalid Credentials","danger");
      }
    }
   const handleOnChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    <div className='container mt-2'>
      <h1>Create Account-(User)</h1>
      <form onSubmit={handleClick}>
     <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" onChange={handleOnChange} id="name" name="name"  required/>
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" onChange={handleOnChange} id="email" name="email" aria-describedby="emailHelp" required/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" onChange={handleOnChange} id="password" name="password" minLength={5} required />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}
