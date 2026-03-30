import student from "../../model/student.js";

const deleteStudents=async(req,res)=>{
try {
    
const{id}=req.params;

const deleteditem=await student.findByIdAndDelete(id);

if(!deleteditem){
   return  res.status(200).json({success:true,message:"Error in Deleting Data "});
}

res.status(200).json({success:true,message:"Data Sucessfully Deleted"});

} catch (error) {
  res.status(500).json({success:false,message:"Internal Server Error",error:error})   
}
}

export default deleteStudents;