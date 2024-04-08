import React,{useState} from "react";
import PropertyContext from "./PropertyContext";
 const PropertyState=(props)=>{
const host="http://localhost:5000";
const initialState=[]
    const [property, setproperty] = useState(initialState);
    const [message, setMessage] = useState(initialState);
    const[userProperty,setUserProperty]=useState(initialState);
    const getAllProperty=async()=>{
        const response = await fetch(`${host}/api/property/fetchallproperty`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
        
            headers: {
              "Content-Type": "application/json",
             "token":localStorage.getItem('token')
            } 
          });
          const json=await response.json();
          console.log(json);
          setproperty(json);
    }

    const userFetchAllProperty=async(type)=>{
      const response = await fetch(`${host}/api/property/userfetchallproperty`, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
      
          headers: {
            "Content-Type": "application/json",
           "token":localStorage.getItem('token')
          } ,
          body:JSON.stringify({type})
        });
        const json=await response.json();
        setUserProperty(json);
  }

    const addProperty=async(propertyarg)=>{
        const{image,price,phone,owner,location,description,type}=propertyarg;
        const response = await fetch(`${host}/api/property/createproperty`, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
      
          headers: {
            "Content-Type": "application/json",
           "token":localStorage.getItem('token')
          } ,
          body:JSON.stringify({image,price,phone,owner,location,description,type})
          
        
        });
        const json=await response.json();
        console.log(json)
          setproperty(property.concat(json))
        }

        const deleteProperty=async (id)=>{

            const response = await fetch(`${host}/api/property/deleteproperty/${id}`, {
              method: "DELETE", // *GET, POST, PUT, DELETE, etc.
          
              headers: {
                "Content-Type": "application/json",
               "token":localStorage.getItem('token')
              } ,
             
              });
            console.log(response);
             
          //   console.log(id);
           const newProperty= property.filter((property)=>{return property._id!==id});
           setproperty(newProperty);
          }

        const editProperty=async(id,image,price,phone,owner,location,description,type)=>{
        
            const response = await fetch(`${host}/api/property/updateproperty/${id}`, {
              method: "PUT", // *GET, POST, PUT, DELETE, etc.
          
              headers: {
                "Content-Type": "application/json",
               "token":localStorage.getItem('token')
              } ,
              body:JSON.stringify({image,price,phone,owner,location,description,type})
            });
            let newProperty=JSON.parse(JSON.stringify(property));
            for(let index=0;index<newProperty.length;index++)
            {
              const element=newProperty[index];
              if(element._id===id)
              {
                newProperty[index].image=image;
                newProperty[index].price=price;
                newProperty[index].phone=phone;
                newProperty[index].owner=owner;
                newProperty[index].location=location;
                newProperty[index].description=description;
                newProperty[index].type=type;
                break;
              }
              
            }
          setproperty(newProperty);
            const json=await response.json();
            console.log(json);
          
          }

          const sendQuery=async(propertyarg)=>{
            const{email,name,query}=propertyarg;
            const response = await fetch(`${host}/api/property/userquery`, {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
          
              headers: {
                "Content-Type": "application/json",
               "token":localStorage.getItem('token')
              } ,
              body:JSON.stringify({email,name,query})
              
            
            });
            const json=await response.json();
            console.log(json);
            }
    
        const sendMessage=async(propertyarg)=>{
          const{ownerid,message,phone,location,description,type}=propertyarg;
            const response = await fetch(`${host}/api/property/chat`, {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
          
              headers: {
                "Content-Type": "application/json",
               "token":localStorage.getItem('token')
              } ,
              body:JSON.stringify({ownerid,message,phone,location,description,type})
              
            
            });
            const json=await response.json();
            console.log(json);
        }
        const fetchAllMessage=async()=>{
          const response = await fetch(`${host}/api/property/fetchallmessage`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
        
            headers: {
              "Content-Type": "application/json",
             "token":localStorage.getItem('token')
            } 
          });
          const json=await response.json();
          console.log(json);
          setMessage(json);
        }
        const deleteMessage=async (id)=>{

          const response = await fetch(`${host}/api/property/deletemessage/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        
            headers: {
              "Content-Type": "application/json",
             "token":localStorage.getItem('token')
            } ,
           
            });
          console.log(response);
           
        //   console.log(id);
         const newmessage= message.filter((message)=>{return message._id!==id});
         setMessage(newmessage);
        }
          return (
            <PropertyContext.Provider value={{property,addProperty,deleteProperty,getAllProperty,editProperty,userProperty,userFetchAllProperty,sendQuery ,sendMessage,message,fetchAllMessage,deleteMessage}}>
                {props.children}
            </PropertyContext.Provider>
        );


        

 }
 export default PropertyState;