var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var PostSchema=new Schema({
  Title:{
    type:String,
    require:true,
  },
  Author:{
    type:String,
    require:true,
  },
  Content:{
    type:String,
    require:true
  }
});
module.exports=mongoose.model('Post',PostSchema);
