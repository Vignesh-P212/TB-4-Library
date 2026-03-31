



import mongoose from "mongoose";

const studentSchema=mongoose.Schema({

    name:{type:String,required:true},
    dept:{type:String,required:true},
    regno:{type:String,required:true},
    phone:{type:Number,},
    role:{type:String,default:"Student"},
    dob:{type:Date,default:null},
    email:{type:String,required:true},
    password:{type:String,required:true},
    isverified:{type:Boolean,default:false},
    limit:{type:Number,default:3} 


})

const student=  mongoose.models.student || mongoose.model("student",studentSchema);;
export default student;
