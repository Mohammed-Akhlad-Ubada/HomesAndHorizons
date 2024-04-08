const jwt = require('jsonwebtoken');
const JWT_KEY="sshs";
fetchUser=(req,res,next)=>{
   
    try {
        const token=req.header('token');
        if(!token)
        {
            return res.status(401).json({error:"token not found"});
        }
        const data= jwt.verify(token,JWT_KEY);
        req.seller=data.seller;
        next();

    } catch (error) {
        console.error(error.message);
        res.status(401).json({ error: "please authenticate using a valid token" });
    }


    
}

module.exports=fetchUser;