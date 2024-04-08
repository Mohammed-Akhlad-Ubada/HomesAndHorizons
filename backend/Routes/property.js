const express=require('express');
const router=express.Router();
const Property=require('../Models/Property');
const jwt = require('jsonwebtoken');
const fetchuser=require('../middleware/fetchuser')
const fetchseller=require('../middleware/fetchseller')
const { body, validationResult } = require('express-validator');
const QuerySchema=require('../Models/Query');
const ChatSchema=require('../Models/Chat');

router.get('/fetchallproperty',fetchseller,async(req,res)=>{
    try {
        const property=await Property.find({user:req.seller.id});
    res.json(property); 
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Some error occurred" }); 
    }
   
})

// Route:2 for the creation of the note
router.post('/createproperty',fetchseller,
[body('phone','Enter a valid mobile number').isLength({min:10,max:10}),
body('description','Enter a valid mobile number').isLength({min:5})
],
async(req,res)=>{
    try {
        const errors = validationResult(req);
        //if there are error occurs during validation the if condition below will evaluate
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const property=await Property.create({
            image:req.body.image,
            user: req.seller.id,
            price:req.body.price,
            phone: req.body.phone,
            owner:req.body.owner,
            location:req.body.location,
            description:req.body.description,
            type:req.body.type.toLowerCase()
       })
       res.json(property);
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Some error occurred" }); 
    }
  
})

//Route:3 for the updation of the note

router.put('/updateproperty/:id',fetchseller,
async(req,res)=>{
    try {
       const{image,price,phone,owner,location,description,type}=req.body;
       const newProperty={};
       if(image){newProperty.image=image}
       if(price){newProperty.price=price}
       if(phone){newProperty.phone=phone}
       if(owner){newProperty.owner=owner}
       if(location){newProperty.location=location}
       if(description){newProperty.description=description}
       if(type){newProperty.type=type}
       let property=await Property.findById(req.params.id);
       if(!property)
       {
        return res.status(404).res.send("property not found")
       }
       if(property.user.toString()!==req.seller.id)
       {
        return res.status(404).send("You don't have access to this note")
       }
       property=await Property.findByIdAndUpdate(req.params.id,{$set:newProperty},{new:true})
       res.send(property);
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Some error occurred" }); 
    }
  
})
//Route:4 for the deletion of the note
router.delete('/deleteproperty/:id',fetchseller,
async(req,res)=>{
    try {
   
       let property=await Property.findById(req.params.id);
       if(!property)
       {
        return res.status(404).json({error:"property not found"})
       }
       if(property.user.toString()!==req.seller.id)
       {
        return res.status(404).send("You don't have access to this note")
       }
       property=await Property.findByIdAndDelete(req.params.id)
       res.json({status:"deleted successfully",property});
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Some error occurred" }); 
    }
  
})

router.post('/userfetchallproperty',fetchuser,async(req,res)=>{
    try {
        const type=req.body.type;
        const property=await Property.find({type});
    res.json(property); 
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Some error occurred" }); 
    }
   
})

//user Query
router.post('/userquery',async(req,res)=>{
    try {
     
        const userquery=await QuerySchema.create({
           email:req.body.email,
           name:req.body.name,
           query:req.body.query
       })
       res.json(userquery);
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Some error occurred" }); 
    }
  
})

//chat route
router.post('/chat',fetchuser,
async(req,res)=>{
    try {
        const chat=await ChatSchema.create({
            ownerid:req.body.ownerid,
            message: req.body.message,
            phone: req.body.phone,
            location:req.body.location,
            description:req.body.description,
            type:req.body.type.toLowerCase()
       })
       res.json(chat);
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Some error occurred" }); 
    }
  
})
router.get('/fetchallmessage',fetchseller,async(req,res)=>{
    try {
        const chat=await ChatSchema.find({ownerid:req.seller.id});
    res.json(chat); 
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Some error occurred" }); 
    }
   
})
router.delete('/deletemessage/:id',fetchseller,
async(req,res)=>{
    try {
   
       let message=await ChatSchema.findById(req.params.id);
       if(!message)
       {
        return res.status(404).json({error:"message not found"})
       }
       if(message.ownerid.toString()!==req.seller.id)
       {
        return res.status(404).send("You don't have access to this note")
       }
       message=await ChatSchema.findByIdAndDelete(req.params.id)
       res.json({status:"deleted successfully",message});
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Some error occurred" }); 
    }
  
})
module.exports=router;