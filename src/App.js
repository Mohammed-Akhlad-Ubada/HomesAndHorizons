import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,Routes,
  Route
} from "react-router-dom";
import Userlogin from './components/Userlogin';
import Sellerlogin from './components/Sellerlogin';
import Usersignup from './components/Usersignup';
import Sellersignup from './components/Sellersignup';
import Property from './components/Property';
import Userproperty from './components/Userproperty';
import PropertyState from './context/property/PropertyState';
import UserNavbar from './components/UserNavbar';
import Home from './components/Home';
import Message from './components/Message';
import { useState } from 'react';
import Alert from './components/Alert'
function App() {

  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
   setAlert({message:message,type:type});
   setTimeout(()=>{
setAlert(null);
   },2000);
  }
  return (
    <PropertyState>
  <Router>
  
        <Routes>
        <Route exact path='/' element={<><Navbar></Navbar><Home></Home></>}></Route>
          <Route exact path='/home' element={<><Navbar display="none"></Navbar><Alert alert={alert}></Alert> <Property showAlert={showAlert}></Property></>}>

          </Route>
          <Route exact path='/message' element={<><Navbar display="none"></Navbar><Alert alert={alert}></Alert> <Message showAlert={showAlert}></Message></>}>

          </Route>
         <Route exact path='/userview' element={<><UserNavbar ></UserNavbar><Alert alert={alert}></Alert> <Userproperty type="apartment" ></Userproperty></>}></Route>
         <Route exact path='/apartment' element={<><UserNavbar></UserNavbar><Userproperty type="apartment" ></Userproperty></>}></Route>
         <Route exact path='/house' element={<><UserNavbar></UserNavbar><Userproperty type="house" ></Userproperty></>}></Route>
         <Route exact path='/land' element={<><UserNavbar></UserNavbar><Userproperty type="land" ></Userproperty></>}></Route>
          <Route exact path='/userlogin' element={<><Navbar></Navbar><Alert alert={alert}></Alert><Userlogin showAlert={showAlert}></Userlogin></>}></Route>
          <Route exact path='/sellerlogin' element={<><Navbar></Navbar><Alert alert={alert}></Alert><Sellerlogin showAlert={showAlert}></Sellerlogin></>}></Route>
          <Route exact path='/usersignup' element={<><Navbar></Navbar><Alert alert={alert}></Alert><Usersignup showAlert={showAlert}></Usersignup></>}></Route>
          <Route exact path='/sellersignup' element={<><Navbar></Navbar><Alert alert={alert}></Alert><Sellersignup showAlert={showAlert}></Sellersignup></>}></Route>
        </Routes>
      </Router>
      </PropertyState>
  );
}

export default App;
