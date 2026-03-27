import student from "../../model/student.js";
import bcrypt from "bcrypt"
const createStudent= async(req,res)=>{
try {
        
//req ---> input data request
//res----> res means for output
const {
name,
dept,
regno,
phone,
dob,
email,
password,

}=req.body


if(!name || !dept || !email || !regno || !password){
    return res.status(400).json({success:false,message:"All the fields are required"})
}


const existing=await student.findOne({phone:phone})

if(existing){
    return res.status(400).json({success:false,message:"User already Registeres"})
}

const hashedpassword = await bcrypt.hash(password,10);

const data=new student({
name,
dept,
regno,
phone,
dob,
email,
password:hashedpassword,
})

await data.save();

res.status(200).json({success:true,message:"Student data Created Successfully",result:data})

} catch (error) {
   //Unexcepted
    res.status(500).json({success:false,message:"Internal Server Error",error:error})

}
}

export default createStudent;
