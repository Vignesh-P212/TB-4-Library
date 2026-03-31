import student from "../../model/student.js";
import bcrypt from "bcrypt"

const updateStudent= async(req,res)=>{
try {

const {
name,
dept,
regno,
phone,
dob,
email,
password,

}=req.body

const {id}=req.params;



const existing=await student.findOne({phone:phone})

if(!existing){
    return res.status(400).json({success:false,message:"User Not Found "})
}

const hashedpassword = await bcrypt.hash(password,10);

const newvalue={
    name,
    dept,
    regno,
    phone,
    dob,
    email,
    password,
}

const updated=student.findByIdAndUpdate(id,newvalue,{
    new:true,
    runValidators:true
})

res.status(200).json({success:true,message:"Student data updated Successfully",result:updated})

} catch (error) {
   //Unexcepted
    res.status(500).json({success:false,message:"Internal Server Error",error:error})

}
}

export default updateStudent;
