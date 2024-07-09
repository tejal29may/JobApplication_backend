// structure of database
const mongoose=require("mongoose")


const jobSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true   
        //  for avoiding duplicate data or fields
    },
    description:{
        type:String,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    }

});

// connector required to connect mongo with node js ,ie. mongoose 

const jobModel=mongoose.model("jobs",jobSchema);

module.exports=jobModel