const mongoose=require('mongoose');
const {Schema}= mongoose;
const QuerySchema=new Schema(
    {
        
email:{
    type:String,
    require:true
},
name:{
    type:String,
    require:true
},
query:{
    type:String,
    require:true
},
date:{
    type:Date,
    default:Date.now
}



}
)
module.exports=mongoose.model('query',QuerySchema);