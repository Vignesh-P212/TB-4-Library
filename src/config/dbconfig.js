import mongoose from "mongoose";

const conenectdb= async()=>{
    try {
        
       await mongoose.connect(process.env.mongo_url);
                               
        console.log("Mongo Db Connected")


    } catch (error) {
         console.log("Mongo Db Connection Failed",error)
        
    }       

}

export default conenectdb;