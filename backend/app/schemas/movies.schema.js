const mongoose=require('mongoose');

const movieSchema=new mongoose.Schema({
    title:{type:String,require:true},
    description:{type:String,require:true},
    year:{type:Date, default: Date.now},
    cover:String
});

module.exports=mongoose.model('Movie',movieSchema);