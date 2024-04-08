import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Userlogin(props) {
  const navigate=useNavigate();
 const  [credentials, setCredentials] = useState({email:"",password:""});
   const handleClick= async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/Userlogin`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
    
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password}) 
    });
    const json=await response.json();
    console.log(json);
    
      if(json.success){
        localStorage.setItem('token',json.token);
       props.showAlert("Logged in Successfully","success");
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
      <h1>User Login</h1>
      <form onSubmit={handleClick}>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" onChange={handleOnChange} id="email" name="email" aria-describedby="emailHelp"required/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" onChange={handleOnChange} id="password" name="password" minLength={5} required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}
