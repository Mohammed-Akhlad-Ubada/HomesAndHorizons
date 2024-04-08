const mongoose=require('mongoose');
const {Schema}= mongoose;
const PropertySchema=new Schema(
    {
        image:{
            type:String,
            require:true
            },
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
    },
price:{
    type:String,
    require:true
},

phone:{
    type:String,
    require:true
},
owner:{
    type:String,
    require:true
},
location:{
    type:String,
    require:true
},
description:{
    type:String,
    require:true
},
type:{
    type:String,
    require:true
},
date:{
    type:Date,
    default:Date.now
}



}
)
module.exports=mongoose.model('property',PropertySchema);