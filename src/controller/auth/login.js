import student from "../../model/student.js";
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"

const login=async(req,res)=>{
try {

    const {
        email,
        password
    }=req.body;

    const user=await student.findOne({email:email});

    if(!user){
       return res.status(400).json({success:false,message:"email not found enter correct one"})
    }

    const matchpassword=await bcrypt.compare(password,user.password)

    if(!matchpassword){
        return res.status(400).json({success:false,message:"Password incorrect enter correct one"})
    }

    if(!user.isverified){
        return res.status(400).json({success:false,message:"Verify the email first "})
    }

    const token= jsonwebtoken.sign(
        {userId:user._id},
        process.env.key,
        {
            expiresIn:24*60*60*1000,
        })

        console.log(token);

    res.status(200).json({success:true,message:"Login Sucessfully",result:user,token:token})

    
} catch (error) {
    console.log(error)
    res.status(500).json({success:false,message:"Internal Server Error",error:error})   
}}
export default login;