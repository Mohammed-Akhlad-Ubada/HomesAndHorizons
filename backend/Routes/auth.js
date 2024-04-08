const express=require('express');
const router=express.Router();
const UserSchema=require('../Models/User');
const SellerSchema=require('../Models/Seller');
const { body, validationResult } = require('express-validator');
const fetchUser=require('../middleware/fetchuser');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
router.post('/CreateUser',
[body('name','Enter a valid name').isLength({min:3}),
body('email','Enter a valid email').isEmail(),
body('password','must contain atleast 5 characters').isLength({min:5})],
async(req,res)=>{
    const errors = validationResult(req);
    //if there are error occurs during validation the if condition below will evaluate
    let success=false;
    if (!errors.isEmpty()) {
      return res.status(400).json({success,errors: errors.array() });
    }
    try{
    //to check whether the user with this email already exist
    let user=await UserSchema.findOne({email:req.body.email});
    if(user)
    {
      return res.status(400).json({ success,error:"Sorry the email you entered is already exist"});
    }
    else{
    var salt=await bcrypt.genSalt(10);
    var secPass= await bcrypt.hash(req.body.password,salt);
   user=await UserSchema.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
   })
   const data={
    user:{
    id:user.id
   }
  }
  success=true;
   var token =jwt.sign(data,"sshs");


   res.json({success,token});
}
      // .then(user => res.json(user))
      // .catch(err=>{console.log(err),res.json({'error':'Please enter a unique email',message:err.message})});
  }
  catch(err){
    return res.status(500).json({ error:"some error occured"});
  }
})
//Login 
router.post('/Userlogin', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password should not be empty').exists()
], async (req, res) => {
 let success=false;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }
      try {
      const { email, password } = req.body;

      // Check if user with this email exists
      const user = await UserSchema.findOne({ email });
      if (!user) {
        
          return res.status(400).json({success, error: "Please enter a valid credential" });
      }


      // Compare passwords
      const PasswordValid = await bcrypt.compare(password, user.password);
      if (!PasswordValid) {
          console.log("Invalid password");
          return res.status(400).json({ success,error: "Please enter a valid credential" });
      }


      // If credentials are valid, generate token
      const data = {
          user: {
              id: user.id
          }
      };
      const token = jwt.sign(data, "sshs");
      success=true
      res.json({ success,token });
  } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Some error occurred" });
  }
});

//fetch user data end point
router.post('/fetchuser', fetchUser,async (req, res) => {
 
     
      try {

      // Check if user with this email exists
      const userId=req.user.id;
      const user = await UserSchema.findById( userId ).select("-password");
      if (!user) {
          return res.status(400).json({ error: "Please enter a valid credential" });
      }
      res.json(user)
} catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Some error occurred" });
  }
});

//Seller

//Seller Create Account
router.post('/CreateSeller',
[body('name','Enter a valid name').isLength({min:3}),
body('email','Enter a valid email').isEmail(),
body('password','must contain atleast 5 characters').isLength({min:5})],
async(req,res)=>{
    const errors = validationResult(req);
    //if there are error occurs during validation the if condition below will evaluate
    let success=false;
    if (!errors.isEmpty()) {
      return res.status(400).json({success,errors: errors.array() });
    }
    try{
    //to check whether the user with this email already exist
    let seller=await SellerSchema.findOne({email:req.body.email});
    if(seller)
    {
      return res.status(400).json({ success,error:"Sorry the email you entered is already exist"});
    }
    else{
    var salt=await bcrypt.genSalt(10);
    var secPass= await bcrypt.hash(req.body.password,salt);
   seller=await SellerSchema.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
   })
   const data={
    seller:{
    id:seller.id
   }
  }
  success=true;
   var token =jwt.sign(data,"sshs");


   res.json({success,token});
}
      // .then(user => res.json(user))
      // .catch(err=>{console.log(err),res.json({'error':'Please enter a unique email',message:err.message})});
  }
  catch(err){
    return res.status(500).json({ error:"some error occured"});
  }
})

router.post('/Sellerlogin', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password should not be empty').exists()
], async (req, res) => {
 let success=false;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }
      try {
      const { email, password } = req.body;

      // Check if user with this email exists
      const seller = await SellerSchema.findOne({ email });
      if (!seller) {
        
          return res.status(400).json({success, error: "Please enter a valid credential" });
      }


      // Compare passwords
      const PasswordValid = await bcrypt.compare(password, seller.password);
      if (!PasswordValid) {
          console.log("Invalid password");
          return res.status(400).json({ success,error: "Please enter a valid credential" });
      }


      // If credentials are valid, generate token
      const data = {
          seller: {
              id: seller.id
          }
      };
      const token = jwt.sign(data, "sshs");
      success=true
      res.json({ success,token });
  } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Some error occurred" });
  }
});



module.exports=router;
