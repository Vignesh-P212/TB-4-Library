import student from "../../model/student.js";

const getStudents=async(req,res)=>{
try {
    

const {dept}=req.query;

let data;

if(dept){

    data=await student.find({dept:dept})

}else{

        data=await student.find()
}

if(data.length===0){
   return  res.status(200).json({success:true,message:"No Record Found"});
}

res.status(200).json({success:true,message:"Data Retrived Sucessfully",counts:data.length,result:data,});

} catch (error) {
  res.status(500).json({success:false,message:"Internal Server Error",error:error})   
}
}

export default getStudents;