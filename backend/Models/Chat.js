const mongoose=require('mongoose');
const {Schema}= mongoose;
const ChatSchema=new Schema(
    {
ownerid:{
    type:String,
    require:true
},
message:{
    type:String,
    require:true
},
phone:{
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
module.exports=mongoose.model('chat',ChatSchema);